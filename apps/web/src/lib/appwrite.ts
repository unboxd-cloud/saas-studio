import { Account, Client } from 'appwrite';

export const appwriteClient = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'http://localhost/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || 'saas-studio');

export const account = new Account(appwriteClient);
