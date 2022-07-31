export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SMALL_DOMAINS_REST_API_BASE_URL: string;
    }
  }
}