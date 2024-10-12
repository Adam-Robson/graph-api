declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      SECRET_KEY: string;
    }
  }
}
