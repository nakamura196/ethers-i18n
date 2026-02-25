import { ethers } from "ethers";
import { t } from "./index";
import { ErrorCode } from "./types";

/**
 * Wraps an ethers.js function call and translates error messages
 * to the configured locale.
 */
export async function withI18n<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (error: unknown) {
    if (error instanceof Error && "code" in error) {
      const ethersError = error as Error & { code: string };
      const code = ethersError.code as ErrorCode;
      const translated = t(code);
      if (translated !== code) {
        const wrapper = new Error(translated);
        Object.assign(wrapper, { code, originalMessage: ethersError.message });
        throw wrapper;
      }
    }
    throw error;
  }
}

/**
 * Translates an ethers.js error code to a localized message.
 * Returns the original code if no translation is found.
 */
export function translateError(error: unknown): string {
  if (error instanceof Error && "code" in error) {
    const ethersError = error as Error & { code: string };
    return t(ethersError.code as ErrorCode);
  }
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}
