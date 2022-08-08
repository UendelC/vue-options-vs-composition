<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>You have {{ todosCount }} todos!</h3>
    <div>
      <label for="todo">
        <input
          id="todo"
          type="text"
          placeholder="Add a Todo"
          v-model="newTodoName"
          @keyup.enter="addTodo"
        >
      </label>
    </div>

    <div>
      <ul>
        <li v-for="(todo, index) in todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',

  data() {
    return {
      newTodoName: '',
      todos: [
        {
          id: 1,
          name: 'Learn Vue',
        },
        {
          id: 2,
          name: 'Learn Vuex',
        },
        {
          id: 3,
          name: 'Learn Vue Router',
        },
      ],
      swearWords: ['fart', 'butt head', 'willy'],
    };
  },

  computed: {
    todosCount(): number {
      return this.todos.length;
    },
  },

  methods: {
    addTodo(): void {
      this.todos.push({
        id: this.todos.length + 1,
        name: this.newTodoName,
      });
      this.newTodoName = '';
    },

    deleteTodo(index: number): void {
      this.todos.splice(index, 1);
    },
  },

  watch: {
    newTodoName(value) {
      if (this.swearWords.includes(value.toLowerCase())) {
        this.newTodoName = '';
        alert('No swearing!');
      }
    },
  },
});
</script>

<style>

ul {
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}

li {
  border: 1px solid;
  display: flex;
  margin: bottom;
}

li span {
  flex-grow: 1;
}

</style>
