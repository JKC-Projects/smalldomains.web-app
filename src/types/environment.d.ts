export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SMALL_DOMAINS_REST_API_BASE_URL: string;
      NEXT_PUBLIC_SMALL_DOMAINS_FORWARDER_USER_FRIENDLY_URL: string;
    }
  }
}