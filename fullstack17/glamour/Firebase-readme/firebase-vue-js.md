# Firebase Posts Management Guide
## Using Vue 3 Composition API with JavaScript

## Initial Setup

### 1. Project Setup
```bash
# Create Vue 3 project
npm create vue@latest

# During setup:
# ✔ Add TypeScript? No
# ✔ Add JSX Support? No
# ✔ Add Vue Router? Yes
# ✔ Add Pinia? Optional
# ✔ Add Vitest? No
# ✔ Add End-to-End Testing? No
# ✔ Add ESLint? Yes
# ✔ Add Prettier? Yes

# Install dependencies
cd your-project-name
npm install
npm install firebase
```

### 2. Firebase Configuration
```javascript
// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore & Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
```

## Composables

### 1. Posts Composable
Composables -> mean reusable logic that can be shared across components. In this case, we have a `usePosts` composable that contains all the logic related to posts management.
They include functions to create, read, update, and delete posts, as well as a list of posts, the current post, and loading and error states.

```javascript
// src/composables/usePosts.js
import { ref } from 'vue';
import { 
  collection, // used to get a reference to a collection (table)
  // RU: Используется для получения ссылки на коллекцию (таблицу)
  // ------------------------------------------------------------
  addDoc,     // used to add a new document to the collection 
  // RU: Используется для добавления нового документа в коллекцию
  // ------------------------------------------------------------
  getDocs,    // used to get all documents in a collection
  // RU: Используется для получения всех документов в коллекции
  // ------------------------------------------------------------
  doc,        // used to get a reference to a document
  // RU: Используется для получения ссылки на документ
  // ------------------------------------------------------------
  getDoc,     // used to get a single document
  // RU: Используется для получения одного документа
  // ------------------------------------------------------------
  updateDoc,  // used to update a document
  // RU: Используется для обновления документа
  // ------------------------------------------------------------
  deleteDoc,  // used to delete a document
  // RU: Используется для удаления документа
  // ------------------------------------------------------------
  query,      // used to query a collection
  // RU: Используется для запроса коллекции
  // ------------------------------------------------------------
  orderBy     // used to order the results
  // RU: Используется для упорядочения результатов
  // ------------------------------------------------------------
} from 'firebase/firestore';
import { db } from '@/firebase/config';

export function usePosts() {
  const posts = ref([]);
  const currentPost = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Create Post
  const createPost = async (postData) => {
    // post data ==  { title: '...', content: '...', imageUrl: '...', author: '...' }
    loading.value = true;
    error.value = null;
    
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        ...postData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      return docRef.id;
    } catch (e) {
      error.value = 'Could not create the post';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  // Get All Posts
  const getPosts = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      
      posts.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
    } catch (e) {
      error.value = 'Could not fetch posts';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  // Get Single Post
  const getPost = async (id) => {
    loading.value = true;
    error.value = null;
    
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        currentPost.value = {
          id: docSnap.id,
          ...docSnap.data()
        };
      } else {
        error.value = 'Post not found';
      }
    } catch (e) {
      error.value = 'Could not fetch the post';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  // Update Post
  const updatePost = async (id, postData) => {
    loading.value = true;
    error.value = null;
    
    try {
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, {
        ...postData,
        updatedAt: new Date()
      });
    } catch (e) {
      error.value = 'Could not update the post';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  // Delete Post
  const deletePost = async (id) => {
    loading.value = true;
    error.value = null;
    
    try {
      await deleteDoc(doc(db, "posts", id));
    } catch (e) {
      error.value = 'Could not delete the post';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return {
    posts,
    currentPost,
    loading,
    error,
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
  };
}
```

### 2. File Upload Composable
```javascript
// src/composables/useFileUpload.js
import { ref } from 'vue';
import { storage } from '@/firebase/config';
import { 
  ref as storageRef, 
  uploadBytesResumable, 
  getDownloadURL 
} from 'firebase/storage';

export function useFileUpload() {
  const uploadProgress = ref(0);
  const uploadError = ref(null);
  const uploadedUrl = ref(null);

  const uploadFile = async (file) => {
    uploadError.value = null;
    uploadProgress.value = 0;
    uploadedUrl.value = null;

    try {
      // Validate file
      if (!file) throw new Error('No file selected');
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('File size must be less than 5MB');
      }

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error('File type not supported');
      }

      // Create file reference
      const fileName = `${Date.now()}-${file.name}`;
      const fileRef = storageRef(storage, `posts/${fileName}`);

      // Upload file
      const uploadTask = uploadBytesResumable(fileRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Update progress
            uploadProgress.value = 
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            uploadError.value = 'Upload failed';
            reject(error);
          },
          async () => {
            try {
              const url = await getDownloadURL(uploadTask.snapshot.ref);
              uploadedUrl.value = url;
              resolve(url);
            } catch (error) {
              uploadError.value = 'Failed to get download URL';
              reject(error);
            }
          }
        );
      });
    } catch (error) {
      uploadError.value = error.message || 'Upload failed';
      throw error;
    }
  };

  return {
    uploadProgress,
    uploadError,
    uploadedUrl,
    uploadFile
  };
}
```

## Vue Components

### 1. Create Post Form
```vue
<!-- src/components/PostForm.vue -->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePosts } from '@/composables/usePosts';
import { useFileUpload } from '@/composables/useFileUpload';

const router = useRouter();
const { createPost, loading, error } = usePosts();
const { uploadFile, uploadProgress, uploadError } = useFileUpload();

const title = ref('');
const content = ref('');
const imageFile = ref(null);

const handleFileChange = (event) => {
  imageFile.value = event.target.files[0];
};

const handleSubmit = async () => {
  try {
    let imageUrl = '';
    
    if (imageFile.value) {
      imageUrl = await uploadFile(imageFile.value);
    }

    const postId = await createPost({
      title: title.value,
      content: content.value,
      imageUrl,
      author: 'Current User' // Replace with actual user data
    });

    router.push(`/posts/${postId}`);
  } catch (e) {
    console.error('Error creating post:', e);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="title" class="block mb-2">Title</label>
      <input
        id="title"
        v-model="title"
        type="text"
        required
        class="w-full p-2 border rounded"
      />
    </div>

    <div>
      <label for="content" class="block mb-2">Content</label>
      <textarea
        id="content"
        v-model="content"
        required
        class="w-full p-2 border rounded"
      ></textarea>
    </div>

    <div>
      <label for="image" class="block mb-2">Image</label>
      <input
        id="image"
        type="file"
        accept="image/*"
        @change="handleFileChange"
        class="w-full p-2 border rounded"
      />
      <div v-if="uploadProgress > 0" class="mt-2">
        Upload progress: {{ Math.round(uploadProgress) }}%
      </div>
    </div>

    <button
      type="submit"
      :disabled="loading"
      class="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {{ loading ? 'Creating...' : 'Create Post' }}
    </button>

    <p v-if="error" class="text-red-500">{{ error }}</p>
  </form>
</template>
```


### 2. Posts List
```vue
<!-- src/components/PostsList.vue -->
<template>
  <div>
    <div v-if="loading">Loading...</div>
    
    <div v-else-if="error">{{ error }}</div>
    
    <div v-else class="space-y-4">
      <article v-for="post in posts" :key="post.id" class="border p-4 rounded">
        <h2 class="text-xl font-bold">{{ post.title }}</h2>
        <p class="text-gray-600">{{ post.content }}</p>
        
        <img 
          v-if="post.imageUrl" 
          :src="post.imageUrl" 
          :alt="post.title"
          class="mt-2 max-w-full h-auto"
        />
        
        <div class="mt-2 space-x-2">
          <button
            @click="router.push(`/posts/${post.id}`)"
            class="px-3 py-1 bg-blue-500 text-white rounded"
          >
            View
          </button>
          <button
            @click="handleDelete(post.id)"
            class="px-3 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { usePosts } from '@/composables/usePosts';

const router = useRouter();
const { posts, loading, error, getPosts, deletePost } = usePosts();

onMounted(() => {
  getPosts();
});

const handleDelete = async (id) => {
  if (!id) return;
  
  if (confirm('Are you sure you want to delete this post?')) {
    try {
      await deletePost(id);
      await getPosts(); // Refresh the list
    } catch (e) {
      console.error('Error deleting post:', e);
    }
  }
};
</script>
```

## Firebase Security Rules
```javascript
// To be set in Firebase Console: Firestore Database > Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;  // Anyone can read posts
      allow create: if request.auth != null;  // Must be logged in to create
      allow update, delete: if request.auth != null && 
        request.auth.uid == resource.data.author;  // Only author can modify
    }
  }
}

// To be set in Firebase Console: Storage > Rules
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
## Implementing Firebase Security Rules

### Setting Up Firestore Rules

1. Access Firebase Console
2. Go to Firestore Database
3. Select "Rules" tab
4. Insert the Firestore rules
5. Click "Publish"

### Setting Up Storage Rules

1. Access Firebase Console
2. Go to Storage
3. Select "Rules" tab
4. Insert the Storage rules
5. Click "Publish"

### Understanding the Rules

#### Firestore Rules Explanation
- Public read access to posts
- Create operations require authentication 
- Update/delete limited to post authors only

#### Storage Rules Explanation
- Public read access to images
- Upload requires authentication
- File restrictions:
  - Maximum size: 5MB
  - Only image file types allowed

### Security Benefits
- Authentication required for content creation
- Content modification restricted to owners
- Upload limitations prevent misuse
- Basic security layer for application integrity

