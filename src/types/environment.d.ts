export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SMALL_DOMAINS_REST_API_BASE_URL: string;
    }
  }
}