import 'package:appwrite/appwrite.dart';

class AppwriteConfig {
  static const endpoint = String.fromEnvironment('APPWRITE_ENDPOINT');
  static const projectId = String.fromEnvironment('APPWRITE_PROJECT_ID');
}

final Client appwriteClient = Client()
    .setEndpoint(AppwriteConfig.endpoint)
    .setProject(AppwriteConfig.projectId);

final Account account = Account(appwriteClient);
final Databases databases = Databases(appwriteClient);
final Storage storage = Storage(appwriteClient);
final Functions functions = Functions(appwriteClient);
