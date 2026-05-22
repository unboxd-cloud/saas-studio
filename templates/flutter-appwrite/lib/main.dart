import 'package:flutter/material.dart';
import 'package:appwrite/appwrite.dart';
import 'appwrite_client.dart';

void main() {
  runApp(const SaaSStudioApp());
}

class SaaSStudioApp extends StatelessWidget {
  const SaaSStudioApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SaaS Studio',
      theme: ThemeData(useMaterial3: true),
      home: const AuthPage(),
    );
  }
}

class AuthPage extends StatefulWidget {
  const AuthPage({super.key});

  @override
  State<AuthPage> createState() => _AuthPageState();
}

class _AuthPageState extends State<AuthPage> {
  final email = TextEditingController();
  final password = TextEditingController();
  final name = TextEditingController();
  String status = 'Not signed in';

  Future<void> register() async {
    await account.create(userId: ID.unique(), email: email.text, password: password.text, name: name.text);
    await login();
  }

  Future<void> login() async {
    await account.createEmailPasswordSession(email: email.text, password: password.text);
    final user = await account.get();
    setState(() => status = 'Logged in as ${user.name}');
  }

  Future<void> logout() async {
    await account.deleteSession(sessionId: 'current');
    setState(() => status = 'Not signed in');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('SaaS Studio Flutter')),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(status),
            TextField(controller: name, decoration: const InputDecoration(labelText: 'Name')),
            TextField(controller: email, decoration: const InputDecoration(labelText: 'Email')),
            TextField(controller: password, decoration: const InputDecoration(labelText: 'Password'), obscureText: true),
            const SizedBox(height: 16),
            FilledButton(onPressed: register, child: const Text('Register')),
            FilledButton(onPressed: login, child: const Text('Login')),
            OutlinedButton(onPressed: logout, child: const Text('Logout')),
          ],
        ),
      ),
    );
  }
}
