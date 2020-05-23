export class AppConfig {
  // Firebase config
  static readonly FIREBASE_PROJECTS_NAME = 'YOUR_PROJECT_ID';
  static readonly FIREBASE_DATABASES_ID = '(default)';
  static readonly FIREBASE_COLLECTION_ID = '/YOUR_COLLECTION_ID';
  static readonly FIREBASE_COMMIT = ':commit';
  static readonly FIREBASE_REQUEST_URL = `https://firestore.googleapis.com/v1/projects/${AppConfig.FIREBASE_PROJECTS_NAME}/databases/${AppConfig.FIREBASE_DATABASES_ID}/documents`;
}