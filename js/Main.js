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
			// This will reset the input text on the input line	
			this.newTask= '';
		},
		removeTask: function(task) {
			var index = this.todoList.indexOf(task);
			this.todoList.splice(index, 1);
		},
		clearAll: function() {
			//Reset the List, using an array versus an empty ''
			this.todoList = [];
		},
		
	}
});