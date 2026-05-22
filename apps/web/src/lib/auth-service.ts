import { account, ID } from '@/app/appwrite';

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}

export async function loginWithEmailPassword(email: string, password: string) {
  await account.createEmailPasswordSession(email, password);
  return account.get();
}

export async function registerWithEmailPassword(name: string, email: string, password: string) {
  await account.create(ID.unique(), email, password, name);
  return loginWithEmailPassword(email, password);
}

export async function logoutCurrentSession() {
  await account.deleteSession('current');
}
