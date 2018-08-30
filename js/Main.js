var todo = new Vue({
	el: '#todo',
	data: {
		newTask: '',
		todoList: []
	},
	methods: {
		addTask: function() {
			var task = this.newTask;
			this.todoList.push(task);
		},
		removeTask: function(task) {
			var index = this.todoList.indexOf(task);
			this.todoList.splice(index, 1);
		}
	}
});