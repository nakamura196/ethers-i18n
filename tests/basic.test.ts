import { describe, it, expect, beforeEach } from "vitest";
import { setLocale, getLocale, t, configure, getSupportedLocales, getMessages } from "../src/index";
import { translateError } from "../src/wrapper";

describe("ethers-i18n", () => {
  beforeEach(() => {
    configure({ locale: "en", fallback: "en" });
  });

  it("returns English by default", () => {
    expect(t("INVALID_ARGUMENT")).toBe("invalid argument");
  });

  it("translates to Japanese", () => {
    setLocale("ja");
    expect(t("INVALID_ARGUMENT")).toBe("無効な引数です");
    expect(t("NETWORK_ERROR")).toBe("ネットワークエラーが発生しました");
  });

  it("translates to Korean", () => {
    setLocale("ko");
    expect(t("INVALID_ARGUMENT")).toBe("잘못된 인수입니다");
  });

  it("translates to Chinese", () => {
    setLocale("zh");
    expect(t("INVALID_ARGUMENT")).toBe("无效的参数");
  });

  it("falls back to English for missing translations", () => {
    configure({ locale: "en", fallback: "en" });
    expect(t("UNKNOWN_ERROR")).toBe("unknown error");
  });

  it("getLocale returns current locale", () => {
    setLocale("ja");
    expect(getLocale()).toBe("ja");
  });

  it("getSupportedLocales returns all locales", () => {
    const locales = getSupportedLocales();
    expect(locales).toContain("en");
    expect(locales).toContain("ja");
    expect(locales).toContain("ko");
    expect(locales).toContain("zh");
  });

  it("getMessages returns locale messages", () => {
    const messages = getMessages("ja");
    expect(messages.TIMEOUT).toBe("タイムアウトしました");
  });

  it("translateError handles ethers-like errors", () => {
    setLocale("ja");
    const error = Object.assign(new Error("invalid argument"), {
      code: "INVALID_ARGUMENT",
    });
    expect(translateError(error)).toBe("無効な引数です");
  });

  it("translateError handles plain errors", () => {
    const error = new Error("something went wrong");
    expect(translateError(error)).toBe("something went wrong");
  });
});
