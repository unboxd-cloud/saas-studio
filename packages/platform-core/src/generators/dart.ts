export type DartTarget = 'flutter' | 'dart-server' | 'dart-cli';

export type DartAppwriteTarget = {
  target: DartTarget;
  packageName: string;
  appwriteSdkVersion: string;
  supportsAuth: boolean;
  supportsDatabases: boolean;
  supportsStorage: boolean;
  supportsFunctions: boolean;
};

export const flutterAppwriteTarget: DartAppwriteTarget = {
  target: 'flutter',
  packageName: 'appwrite',
  appwriteSdkVersion: '^15.0.0',
  supportsAuth: true,
  supportsDatabases: true,
  supportsStorage: true,
  supportsFunctions: true
};

export function generateDartClient(endpoint: string, projectId: string) {
  return `import 'package:appwrite/appwrite.dart';\n\nfinal Client client = Client()\n  .setEndpoint('${endpoint}')\n  .setProject('${projectId}');\n\nfinal Account account = Account(client);\nfinal Databases databases = Databases(client);\nfinal Storage storage = Storage(client);\nfinal Functions functions = Functions(client);\n`;
}
