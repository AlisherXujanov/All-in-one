## Install Node.js and npm:

Ensure you have Node.js and npm installed. You can download them from https://nodejs.org/.

- RU: Убедитесь, что у вас установлены Node.js и npm. Вы можете загрузить их с https://nodejs.org/.

## Install Vue:
```bash
npm create vue@latest
# This installs the Vue CLI globally on your machine.
```

## Navigate to Your Project:

Change directory to your newly created project:

- RU: Перейдите в каталог вашего нового проекта:

```bash
cd my-vue-app
```

## Serve Your Project:

Start the development server with:

```bash
npm run serve
```

This command compiles and hot-reloads for development. Your Vue app will be running at http://localhost:8080 or another port if 8080 is busy

- RU: Эта команда компилирует и перезагружает для разработки. Ваше приложение Vue будет работать по адресу http://localhost:8080 или другому порту, если 8080 занят.

## Learn Vue.js:

Start exploring and learning Vue.js. Here are some resources:

1. Official Vue.js Documentation: https://vuejs.org/v2/guide/ for Vue 2 or https://v3.vuejs.org/guide/introduction.html for Vue 3. The documentation is comprehensive and includes tutorials, guides, and examples.
2. Vue Mastery: Offers video courses ranging from beginner to advanced levels. Some courses are free. https://www.vuemastery.com/
3. Vue School: Provides tutorials and courses on Vue.js and related technologies. https://vueschool.io/
4. Build Projects: Applying what you learn by building projects is one of the best ways to understand Vue.js deeply.

## Directives

Vue.js provides a set of built-in directives that you can use to manipulate the DOM. Here are some commonly used directives:

- RU: Vue.js предоставляет набор встроенных директив, которые вы можете использовать для манипуляции DOM. Вот некоторые часто используемые директивы:

1. v-bind: Binds an attribute to an expression. For example, v-bind:href="url" binds the href attribute of an anchor tag to the value of the url variable.

- RU: v-bind: привязывает атрибут к выражению. Например, v-bind:href="url" привязывает атрибут href тега якоря к значению переменной url.
- Example:

```html
<a v-bind:href="url">Link</a>

<!-- 
SHORTHAND:
<a :href="url">Link</a>
-->
```

2. v-model: Binds form input fields to data on the Vue instance. For example, v-model="message" binds an input field to the message data property.

- RU: v-model: привязывает поля ввода формы к данным в экземпляре Vue. Например, v-model="message" привязывает поле ввода к свойству данных сообщения.
- Example:

```html
<input v-model="message" type="text" />

<p>{{ message }}</p>
```

3. v-if: Conditionally renders an element based on a truthy value. For example, v-if="isVisible" only renders the element if the isVisible data property is true.

- RU: v-if: условно отображает элемент на основе истинного значения. Например, v-if="isVisible" отображает элемент только в том случае, если isVisible свойство данных равно true.
- Example:

```html
<div v-if="isVisible">Visible</div>
<div v-else-if="isHidden">Hidden</div>
<div v-else>Not Visible</div>
```

4. v-for: Loops through an array and renders an element for each item. For example, v-for="item in items" renders an element for each item in the items array.

- RU: v-for: проходит по массиву и отображает элемент для каждого элемента. Например, v-for="item in items" отображает элемент для каждого элемента в массиве элементов.
- Example:

```html
<ul>
  <li v-for="item in items">{{ item }}</li>
</ul>
```

5. v-show: Conditionally shows an element based on a truthy value. For example, v-show="isVisible" shows the element if the isVisible data property is true.

- RU: v-show: условно показывает элемент на основе истинного значения. Например, v-show="isVisible" показывает элемент, если isVisible свойство данных равно true.
- Example:

```html
<div v-show="isVisible">Visible</div>
```

Difference between v-if and v-show:

- RU: Разница между v-if и v-show:
- v-if: The element is removed from the DOM if the condition is false. It is a conditional rendering directive.
- RU: Элемент удаляется из DOM, если условие ложно. Это директива условного рендеринга.
- v-show: The element is hidden with display: none if the condition is false. It toggles the visibility of the element.
- RU: Элемент скрыт с помощью display: none, если условие ложно. Он переключает видимость элемента.

6. v-on: Listens to DOM events and triggers methods on the Vue instance. For example, v-on:click="handleClick" listens for a click event and calls the handleClick method.

- RU: v-on: прослушивает события DOM и вызывает методы в экземпляре Vue. Например, v-on:click="handleClick" прослушивает событие щелчка и вызывает метод handleClick.
- Example:

```html
<button v-on:click="handleClick">Click me</button>

<!-- 
SHORTHAND:
<button @click="handleClick">Click me</button> 
-->
```

## Event Modifiers

- RU: Модификаторы событий

Vue.js provides event modifiers that can be used to modify the behavior of DOM events. Here are some commonly used event modifiers:

1. `.stop`: Stops the event propagation. Equivalent to event.stopPropagation().
2. `.prevent`: Prevents the default behavior of the event. Equivalent to event.preventDefault().
3. `.once`: Listens for the event only once.

### Keyboard Key Event Modifiers

Vue.js also provides keyboard key event modifiers that can be used to listen for specific keys:
example:

```html
<input @keyup.enter="submit" />
<!-- space, tab, delete, esc, up, down, left, right -->
```

Or we can also combine multiple modifiers:

```html
<input @keyup.ctrl.enter="submit" />
```



