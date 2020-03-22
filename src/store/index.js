import Vue from "vue";

const store = {
    state: {
        todos: [{
            _id: "212",
            title: "title",
            description: "description"
        }]
    },
    actions: {
        createTodo(state, todo) {
            todo._id = Math.random().toString(36).substr(2, 7);
            state.todos.push(todo);
        },
        updateTodo(state, todoToUpdate) {
            const index = state.todos.findIndex(todo => {
                return todo._id === todoToUpdate._id;
            });

            Vue.set(state.todos, index, todoToUpdate);
        },
        deleteTodo(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo._id === todoId;
            });

            state.todos.splice(index, 1);
            // Vue.delete(state.todos, index, todoToDelete);
        }
    }
};

store.dispatch = function(action, payload) {
    if (!this.actions[action]) {
        throw new Error(`Action ${action} is not defined in the store`);
    }

    return this.actions[action](this.state, payload);
};

export default store;
