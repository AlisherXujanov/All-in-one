Main topics:

- [Install Node.js and npm:](#install-nodejs-and-npm)
- [Learn Vue.js:](#learn-vuejs)
- [Directives](#directives)
- [Methods](#methods)
- [Computed](#computed)
- [Watchers](#watchers)



## Install Node.js and npm: 
Ensure you have Node.js and npm installed. You can download them from https://nodejs.org/.


## Learn Vue.js: 
Start exploring and learning Vue.js. Here are some resources:

1. Official Vue.js Documentation: https://v3.vuejs.org/guide/introduction.html for Vue 3. The documentation is comprehensive and includes tutorials, guides, and examples.
2. Vue Mastery: Offers video courses ranging from beginner to advanced levels. Some courses are free. https://www.vuemastery.com/
3. Build Projects: Applying what you learn by building projects is one of the best ways to understand Vue.js deeply.

## Directives
Vue.js provides a set of built-in directives that you can use to manipulate the DOM. Here are some commonly used directives:

1. v-bind: Binds an attribute to an expression. For example, v-bind:href="url" binds the href attribute of an anchor tag to the value of the url variable.
- Example: 
```html
<a v-bind:href="url">Link</a>

<!-- 
SHORTHAND:
<a :href="url">Link</a>
-->
```

2. v-model: Binds form input fields to data on the Vue instance. For example, v-model="message" binds an input field to the message data property.
- Example: 
```html
<input v-model="message" type="text">

<p>{{ message }}</p>
```

3. v-if: Conditionally renders an element based on a truthy value. For example, v-if="isVisible" only renders the element if the isVisible data property is true.
- Example: 
```html
<div v-if="isVisible">Visible</div>
<div v-else-if="isHidden">Hidden</div>
<div v-else>Not Visible</div>
```

4. v-for: Loops through an array and renders an element for each item. For example, v-for="item in items" renders an element for each item in the items array.
- Example: 
```html
<ul>
  <li v-for="item in items">{{ item }}</li>
</ul>
```


5. v-show: Conditionally shows an element based on a truthy value. For example, v-show="isVisible" shows the element if the isVisible data property is true.
- Example: 
```html
<div v-show="isVisible">Visible</div>
```

Difference between v-if and v-show:
- v-if: The element is removed from the DOM if the condition is false. It is a conditional rendering directive.
- v-show: The element is hidden with display: none if the condition is false. It toggles the visibility of the element.


6. v-on: Listens to DOM events and triggers methods on the Vue instance. For example, v-on:click="handleClick" listens for a click event and calls the handleClick method.
- Example: 
```html
<button v-on:click="handleClick">Click me</button>

<!-- 
SHORTHAND:
<button @click="handleClick">Click me</button> 
-->
```

## Methods
Vue.js allows you to define custom methods that can be called in response to DOM events. Here's how you can define methods in a Vue instance:

```html
<div id="app">
  <button v-on:click="handleClick">Click me</button>
</div>

<script>
  const app = Vue.createApp({
    methods: {
      handleClick() {
        alert('Button clicked!');
      }
    }
  });

  app.mount('#app');
</script>
```

## Computed
Computed properties are used to calculate a value based on other data properties. Computed properties are cached and only re-evaluated when their dependencies change. Here's how you can define computed properties in a Vue instance:


```html
<div id="app">
  <p>{{ fullName }}</p>
</div>

<script>
  const app = Vue.createApp({
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe'
      };
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
  });

  app.mount('#app');
</script>
```

## Watchers
Watchers are used to perform asynchronous operations in response to data changes. Watchers are defined as functions that receive the new and old values of the watched property. Here's how you can define watchers in a Vue instance:

```html
<div id="app">
  <form>
    <input v-model="num1" type="number">
    <input v-model="num2" type="number">
    <hr>
    <p>Sum: {{ sum }}</p>
  </form>
</div>


<script>
  const app = Vue.createApp({
    data() {
      return {
        num1: 0,
        num2: 0,
        sum: 0
      };
    },
    watch: {
      num1(newValue, oldValue) {
        this.sum = newValue + this.num2;
      },
      num2(newValue, oldValue) {
        this.sum = this.num1 + newValue;
      }
    }
  });
  app.mount('#app');
</script>