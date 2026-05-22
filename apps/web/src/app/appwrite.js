import { Client, Account, ID } from 'appwrite';

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '';
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '';

if (!endpoint || !projectId) {
  console.warn('Missing Appwrite endpoint and project ID');
}

export const client = new Client().setEndpoint(endpoint).setProject(projectId);
export const account = new Account(client);
export { ID };
