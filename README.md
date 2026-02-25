# ethers-i18n

Internationalization (i18n) plugin for ethers.js error messages.

ethers.js のエラーメッセージを多言語化するプラグイン。

## Features

- Non-breaking: works alongside existing ethers.js
- Easy to add new languages
- TypeScript support
- Currently supports: English, Japanese (日本語), Korean (한국어, stub), Chinese (中文, stub)

## Installation

```bash
npm install ethers-i18n ethers
```

## Usage

```typescript
import { ethers } from "ethers";
import { setLocale, wrapProvider } from "ethers-i18n";

// ロケールを日本語に設定
setLocale("ja");

// プロバイダーをラップ
const provider = wrapProvider(ethers.getDefaultProvider("mainnet"));

// エラーが日本語で表示される
try {
  await provider.getBalance("invalid-address");
} catch (e) {
  console.error(e.message);
  // "無効なアドレスです: invalid-address"
}
```

## Supported Error Codes

| Error Code | English | 日本語 |
|-----------|---------|--------|
| INVALID_ARGUMENT | invalid argument | 無効な引数です |
| MISSING_ARGUMENT | missing argument | 引数が不足しています |
| UNEXPECTED_ARGUMENT | unexpected argument | 予期しない引数です |
| CALL_EXCEPTION | call exception | コントラクト呼び出しに失敗しました |
| INSUFFICIENT_FUNDS | insufficient funds | 残高が不足しています |
| NETWORK_ERROR | network error | ネットワークエラーが発生しました |
| SERVER_ERROR | server error | サーバーエラーが発生しました |
| TIMEOUT | timeout | タイムアウトしました |
| NONCE_EXPIRED | nonce expired | ノンスが期限切れです |
| UNPREDICTABLE_GAS_LIMIT | unpredictable gas limit | ガスリミットを推定できません |

## Adding a New Language

```typescript
// src/locales/fr.ts
import { LocaleMessages } from "../types";

export const fr: LocaleMessages = {
  INVALID_ARGUMENT: "argument invalide",
  MISSING_ARGUMENT: "argument manquant",
  // ...
};
```

## License

MIT
