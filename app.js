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
  },

  toggleAll: function () {
    let completedTodos = 0;

    //count number of todos
    for (let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].isCompleted === true) {
        completedTodos++;
      }
    }

    //Case 1: If everything is true, make evrything false
    if(completedTodos  === this.todos.length) {
      for (let i = 0; i< this.todos.length; i++) {
        this.todos[i].isCompleted = false;
      }
    //Case 2: Make everything true
    } else {
        for (let i = 0; i < this.todos.length; i++) {
          this.todos[i].isCompleted = true;
        }
      }

    todoList.displayTodos();
  }
};

// todoList.displayTodos();
// todoList.addTodo("take dog for a walk");
// todoList.changeTodo(3, "sell tires");

// todoList.toggleAll();
// todoList.displayTodos();


$(document).ready(function() {
    $("#display-todos").click( function() {
        todoList.displayTodos();
        console.log("DISPLAYED");
    });

    $("#toggle-all").click( () => {
      todoList.toggleAll();
      console.log("Toggled");
    })
});



