<template>
  <div class="not-found">
    <h1>Oops! Page Not Found</h1>
    <p>We're sorry, but the page you're looking for seems to have gone out of style.</p>
    <p>Don't worry though - you can always return to our latest fashion collection.</p>
    <router-link to="/" class="home-link">Return to Homepage</router-link>
  </div>
</template>

<script>
// Options API
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
