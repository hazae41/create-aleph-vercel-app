/**
 * Check whether the app is running in dev move
 * @returns if the app runs in dev mode
 */
export function isDevMode() {
  return Deno.env.get("ALEPH_BUILD_MODE") === "development"
}