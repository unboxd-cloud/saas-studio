import { Account, Client, Databases, Functions, Storage, Teams, Users } from 'appwrite';

export type AppwriteProviderConfig = {
  endpoint: string;
  projectId: string;
  apiKey?: string;
};

export class AppwriteProvider {
  readonly client: Client;
  readonly account: Account;
  readonly users: Users;
  readonly teams: Teams;
  readonly databases: Databases;
  readonly storage: Storage;
  readonly functions: Functions;

  constructor(config: AppwriteProviderConfig) {
    this.client = new Client()
      .setEndpoint(config.endpoint)
      .setProject(config.projectId);

    if (config.apiKey) {
      this.client.setKey(config.apiKey);
    }

    this.account = new Account(this.client);
    this.users = new Users(this.client);
    this.teams = new Teams(this.client);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
    this.functions = new Functions(this.client);
  }

  async health() {
    return {
      provider: 'appwrite',
      status: 'ready'
    };
  }
}
