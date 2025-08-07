# Firebase with Next.js: Complete Setup & Usage Guide

## 1. Project Setup

### Create a Next.js App
```bash
npx create-next-app@latest my-firebase-app
cd my-firebase-app
npm install firebase
```

## 2. Firebase Configuration

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Add a web app and copy your config

**Create `lib/firebase.js`:**
```js
// lib/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const storage = getStorage(app);
```

## 3. CRUD Operations (Firestore)

**Example: `lib/posts.js`**
```js
import { db } from './firebase';
import {
  collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, orderBy
} from 'firebase/firestore';

export async function createPost(data) {
  const docRef = await addDoc(collection(db, 'posts'), {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return docRef.id;
}

export async function getPosts() {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getPost(id) {
  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}

export async function updatePost(id, data) {
  const docRef = doc(db, 'posts', id);
  await updateDoc(docRef, { ...data, updatedAt: new Date() });
}

export async function deletePost(id) {
  await deleteDoc(doc(db, 'posts', id));
}
```

## 4. File Upload (Storage)

**Example: `lib/upload.js`**
```js
import { storage } from './firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export function uploadFile(file) {
  return new Promise((resolve, reject) => {
    const fileRef = ref(storage, `posts/${Date.now()}-${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);
    uploadTask.on(
      'state_changed',
      null,
      error => reject(error),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(url);
      }
    );
  });
}
```

## 5. Using in Next.js Pages/Components

**Example: Creating a Post**
```js
// pages/new-post.js
import { useState } from 'react';
import { createPost } from '../lib/posts';
import { uploadFile } from '../lib/upload';
import { useRouter } from 'next/router';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = '';
    if (file) imageUrl = await uploadFile(file);
    const id = await createPost({ title, content, imageUrl, author: 'Current User' });
    router.push(`/posts/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} required placeholder="Title" />
      <textarea value={content} onChange={e => setContent(e.target.value)} required placeholder="Content" />
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Create Post</button>
    </form>
  );
}
```

## 6. Firebase Security Rules

**Firestore Rules:**
```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.author;
    }
  }
}
```

**Storage Rules:**
```js
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /posts/{fileName} {
      allow read: if true;
      allow write: if request.auth != null &&
                   request.resource.size < 5 * 1024 * 1024 &&
                   request.resource.contentType.matches('image/.*');
    }
  }
}
```

## 7. Authentication (Optional)

**Add Auth to `lib/firebase.js`:**
```js
import { getAuth } from 'firebase/auth';
// ...existing code...
export const auth = getAuth(app);
```

**Sign In Example:**
```js
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

await signInWithEmailAndPassword(auth, email, password);
```

## 8. Deployment
- Set environment variables in Vercel/Netlify for your Firebase config
- Never commit secrets to git

## 9. Resources
- [Firebase Docs](https://firebase.google.com/docs/web/setup)
- [Next.js Docs](https://nextjs.org/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Auth](https://firebase.google.com/docs/auth)

---
This guide covers initializing Firebase, CRUD, file upload, security rules, and usage in Next.js apps. For advanced features (SSR, server actions, etc.), see the official docs.
