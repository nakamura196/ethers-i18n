export type ErrorCode =
  | "INVALID_ARGUMENT"
  | "MISSING_ARGUMENT"
  | "UNEXPECTED_ARGUMENT"
  | "CALL_EXCEPTION"
  | "INSUFFICIENT_FUNDS"
  | "NETWORK_ERROR"
  | "SERVER_ERROR"
  | "TIMEOUT"
  | "BUFFER_OVERRUN"
  | "NUMERIC_FAULT"
  | "ACTION_REJECTED"
  | "NONCE_EXPIRED"
  | "REPLACEMENT_UNDERPRICED"
  | "TRANSACTION_REPLACED"
  | "UNPREDICTABLE_GAS_LIMIT"
  | "UNSUPPORTED_OPERATION"
  | "UNKNOWN_ERROR";

export type LocaleMessages = {
  [key in ErrorCode]: string;
};

export type SupportedLocale = "en" | "ja" | "ko" | "zh";

export interface I18nConfig {
  locale: SupportedLocale;
  fallback: SupportedLocale;
}
