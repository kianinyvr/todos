const todoList = {
  todos: [
            { todoText:"clean room",
              isCompleted: false
            },

            {
              todoText: "laundry",
              isCompleted: false
            },

            {
               todoText: "practice code",
               isCompleted: false
            }

          ],

  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty");
    } else {
      console.log("My Todos:");
      for (let i = 0; i < this.todos.length; i++){
        //check if completed
        if (this.todos[i].isCompleted === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      isCompleted: false
    });
    this.displayTodos();
  },

  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function (position) {
    const todo = this.todos[position];
    todo.isCompleted = !todo.isCompleted;
    this.displayTodos();
  }
};

todoList.displayTodos();
todoList.addTodo("take dog for a walk");
todoList.changeTodo(3, "sell tires");
todoList.toggleCompleted(0);
todoList.deleteTodo(0);
todoList.deleteTodo(0);
todoList.deleteTodo(0);
todoList.deleteTodo(0);

