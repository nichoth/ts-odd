import { Endpoints, setup as internalSetup } from "./setup/internal.js"


/**
 * Toggle debug mode.
 *
 * Only adds a few `console.log`s at this moment.
 */
export function debug({ enabled }: { enabled: boolean }): boolean {
  internalSetup.debug = enabled
  return internalSetup.debug
}

/**
 * Configure whether webnative should aggressively pin
 * everything, or pin nothing at all.
 */
export function shouldPin({ enabled }: { enabled: boolean }): boolean {
  internalSetup.shouldPin = enabled
  return internalSetup.shouldPin
}


/**
 * Override endpoints.
 *
 * You can override each of these,
 * no need to provide them all here.
 *
 * `api` Location of the Fission API
 *       (default `https://runfission.com`)
 * `lobby` Location of the authentication lobby.
 *         (default `https://auth.fission.codes`)
 * `user`  User's domain to use, will be prefixed by username.
 *         (default `fission.name`)
 */
export function endpoints(e: Partial<Endpoints>): Endpoints {
  internalSetup.endpoints = { ...internalSetup.endpoints, ...e }
  return { ...internalSetup.endpoints }
}

export { setDependencies } from "./setup/dependencies.js"
