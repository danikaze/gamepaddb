/*
 * Data added automatically from the build
 *
 * Do not change. Use global.d.ts to add global data
 */

/** Env constant set to (package.json).name */
declare const PACKAGE_NAME: string;
/** Env constant set to (package.json).version */
declare const PACKAGE_VERSION: string;
/** Env constant set to the git commit hash */
declare const COMMIT_HASH: string;
/** Env constant set to the 7 first characters of the git commit hash */
declare const COMMIT_HASH_SHORT: string;
/** Build ID generated by NextJS (it will be "development" in non-production) */
declare const BUILD_ID: string;
/** Env constant set to `true` for the production build, `false` for development */
declare const IS_PRODUCTION: boolean;
/** Env constant set to `true` when executed in server side */
declare const IS_SERVER: boolean;
/** Env constant set to `true` when executed by tests */
declare const IS_TEST: boolean;
/** Absolute path to the locales url */
declare const LOCALES_URL: string;
/** List of available languages (folders) from the LOCALES_PATH */
declare const AVAILABLE_LANGUAGES: AVAILABLE_LANGUAGE_TYPE[];
/** List of available i18n languages (auto-generated from LOCALES_PATH) */
type AVAILABLE_LANGUAGE_TYPE = never;
/** Configuration from logger.config.js */
declare const LOGGER_CONFIG: {};
