export default class TodoModel{
	constructor(){
		this.listeners = []
		this.STORE_KEY = 'todos'
		this.todos  = localStorage.getItem(this.STORE_KEY)?JSON.parse(localStorage.getItem(this.STORE_KEY)):[]
	}
	subscribe(listener){
		this.listeners.push(listener)
	}
	emit(){
		this.listeners.forEach(listener=>listener())
	}
	save(todos){
		localStorage.setItem(this.STORE_KEY,JSON.stringify(todos))
		this.emit()
	}
	addTodo=(todo)=>{		
		todo=Object.assign({},{id:Date.now(),complete:false},todo)
		let todos=this.todos
		todos.push(todo)
		this.save(todos)
	}
	toggle=(id)=>{
		let todos=this.todos
		todos.map((todo)=>{
			if(todo.id===id){
				todo.complete=!todo.complete
			}
			return todo
		})
		this.save(todos)	
	}
	remove=(id)=>{
		let todos=this.todos
		// todos = todos.filter((todo)=>{
		// 	return todo.id!==id
		// })
		let index= todos.findIndex((todo)=>todo.id===id)
		this.todos.splice(index,1)
		this.save(todos)	
	}
	toggleAll=(e)=>{
			let checked = e.target.checked
			let todos=this.todos
			todos.map((todo)=>todo.complete=checked)
			this.save(todos)	
	}
	removeComplete=()=>{
		let todos=this.todos
		this.todos= todos.filter(todo=>!todo.complete)
		console.log(todos)
		this.save(todos)	
	}
}