export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SMALL_DOMAINS_REST_API_BASE_URL: string;
      REACT_APP_SMALL_DOMAINS_FORWARDER_USER_FRIENDLY_URL: string;
    }
  }
}