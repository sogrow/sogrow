export class CoreUtils {
  public static hideSensitive(input: string): string {
    if (!input || input.length < 8) return '*'.repeat(6)
    return `${input.slice(0, 3)}${'*'.repeat(6)}${input.slice(-4)}`
  }
}
