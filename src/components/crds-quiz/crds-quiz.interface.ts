export interface User {
  firstName: string;
  nickName: string;
  email: string;
}

declare global {
  interface Window {
    typeformEmbed: any;
  }
}
