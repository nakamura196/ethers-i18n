import { setLocale, t, getSupportedLocales } from "../src/index";
import { translateError } from "../src/wrapper";

// Show all supported locales
console.log("Supported locales:", getSupportedLocales());

// English (default)
console.log("\n--- English ---");
console.log(t("INVALID_ARGUMENT"));
console.log(t("INSUFFICIENT_FUNDS"));

// Japanese
setLocale("ja");
console.log("\n--- 日本語 ---");
console.log(t("INVALID_ARGUMENT"));
console.log(t("INSUFFICIENT_FUNDS"));

// Korean
setLocale("ko");
console.log("\n--- 한국어 ---");
console.log(t("INVALID_ARGUMENT"));
console.log(t("INSUFFICIENT_FUNDS"));

// Chinese
setLocale("zh");
console.log("\n--- 中文 ---");
console.log(t("INVALID_ARGUMENT"));
console.log(t("INSUFFICIENT_FUNDS"));

// Error translation example
setLocale("ja");
const fakeError = Object.assign(new Error("insufficient funds"), {
  code: "INSUFFICIENT_FUNDS",
});
console.log("\n--- Error Translation ---");
console.log("Original:", fakeError.message);
console.log("Translated:", translateError(fakeError));
