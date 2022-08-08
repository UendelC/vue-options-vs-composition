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
import {
  computed,
  defineComponent,
  ref,
  watch,
} from 'vue';

export default defineComponent({
  name: 'HomeView',

  setup() {
    interface TodoInterface {
      id: number;
      name: string;
    }

    const newTodoName = ref('');
    const todos = ref([] as TodoInterface[]);
    const swearWords = ['fart', 'butt head', 'willy'];

    const todosCount = computed(() => todos.value.length);

    function addTodo() {
      if (newTodoName.value) {
        todos.value.push({
          id: todos.value.length + 1,
          name: newTodoName.value,
        });
        newTodoName.value = '';
      }
    }

    function deleteTodo(index: number) {
      todos.value.splice(index, 1);
    }

    watch(newTodoName, (value: string) => {
      if (swearWords.includes(value.toLowerCase())) {
        newTodoName.value = '';
        alert('You swore!');
      }
    });

    return {
      newTodoName,
      todos,
      addTodo,
      deleteTodo,
      todosCount,
    };
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
