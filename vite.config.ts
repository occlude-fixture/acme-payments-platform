import { fileURLToPath } from "node:url";
import type { IncomingMessage } from "node:http";
import react from "@vitejs/plugin-react";
import type { Plugin } from "vite";
import { defineConfig } from "vitest/config";

// The dev server answers /api/* from the service layer so the browser bundle
// only ever holds the web app.
const API_ENTRY = "/src/services/billing-api/handler.ts";

function readBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk: Buffer) => (raw += chunk.toString("utf8")));
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

function devApi(): Plugin {
  return {
    name: "acme-dev-api",
    configureServer(server) {
      server.middlewares.use("/api", async (req, res, next) => {
        if (req.method !== "POST") return next();
        res.setHeader("content-type", "application/json");
        try {
          const body = await readBody(req);
          const mod = await server.ssrLoadModule(API_ENTRY);
          const route = (req.url ?? "").replace(/^\//, "");
          res.end(JSON.stringify({ ok: true, result: await mod.handle(route, body) }));
        } catch (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ ok: false, error: err instanceof Error ? err.message : String(err) }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), devApi()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  server: { port: 5173, strictPort: true },
  test: {
    include: ["src/**/*.test.{ts,tsx}"],
    environment: "node",
  },
});
