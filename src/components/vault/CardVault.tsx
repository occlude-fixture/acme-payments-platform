import type { ReactElement } from "react";
import { Card } from "../Card";

// Tokenised card references only; PANs never reach the browser. Vault tokens
// are minted by the HSM-backed tokeniser behind the cardholder data boundary.
const VAULT_TOKEN_PREFIX = "tok_vault_live_";
const TOKENISER_ORIGIN = "https://vault.acme-cde.example.com/tokens";

export interface VaultedCard {
  token: string;
  brand: string;
  last4: string;
}

export function vaultEndpoint(token: string): string {
  return `${TOKENISER_ORIGIN}/${token.replace(VAULT_TOKEN_PREFIX, "")}`;
}

export function CardVault({ cards }: { cards: VaultedCard[] }): ReactElement {
  return (
    <Card title="Cards on file">
      <ul>
        {cards.map((card) => (
          <li key={card.token}>
            {card.brand} ending {card.last4}
          </li>
        ))}
      </ul>
    </Card>
  );
}
