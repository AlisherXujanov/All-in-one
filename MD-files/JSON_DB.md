# Step 1: Create a JSON file
> - Create a new JSON file in your React project and name it “db.json”. 
> In this file, we will define the API responses that we want to mock. 
> Here’s an example:
```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
}
```
___

# Step 2: Install JSON Server
```npm install -g json-server```
___

# Step 3: Start the JSON server
```json-server --watch db.json --port 3030```
or 
```json-server --watch db.json --port 3030 --host```
> - Note: React utilizes the 3000 port, which json-server uses 
> to run the server, thus we used — port 3030to modify the port.
___


# Step 4: Test API
> - Now if we open http://localhost:3030/posts 
> on our browser, we can see our data.
___

# Step 5: Make API requests in React
> - In your React component, use the fetch API or any 
> other HTTP client library to make API requests to 
> the JSON server. Here’s an example using fetch:

```typescript
import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <span>{post.id}</span> {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
```
___

# Step 6: Create a new post
> - To create a new post, we need to make a POST request to the /posts endpoint.
> - Here’s an example using fetch:
```typescript
import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = () => {
    var myHeaders = new Headers();
    // Headers are used to set the content type of the request
    // and the format of the data we are sending to the server.

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      title: title,
      body: body,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3030/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={createPost}>Create Post</button>
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <span>{post.id}</span> {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
```


# Step 7: Update a post
> - To update a post, we need to make a PUT request to the /posts/:id endpoint.
> - Here’s an example using fetch:
```typescript
import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const updatePost = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      title: title,
      body: body,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:3030/posts/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={() => updatePost(1)}>Update Post</button>
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <span>{post.id}</span> {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
```

