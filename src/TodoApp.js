import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoFoot from './TodoFoot';
// * as 所有导入变量变成对象
import * as filterTypes from './filter-types';
export default class TodoApp extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			filterType:filterTypes.ALL
		}
	}
	changeType=(filterType)=>{
		this.setState({filterType})
	}
	render(){
		let todos=this.props.model.todos
		let activeTodoCount=todos.reduce((current,next)=> current+ (next.complete?0:1),0)
		let showTodos = todos.filter((todo)=>{
			switch(this.state.filterType){
				case filterTypes.ACTIVE:
					return !todo.complete;
				case filterTypes.COMPLETE:
					return todo.complete; 
				default:
					return true;
			}
		})
		let main=(
			<ul>
			{
				todos.length>0?<li><input type="checkbox" checked={activeTodoCount===0} onChange={this.props.model.toggleAll}/>{activeTodoCount===0?"全不选":"全选"}</li>:''
		
			}	

			
			{showTodos.map((todo,index)=><TodoList todo={todo} key={index}  toggle={this.props.model.toggle} remove={this.props.model.remove} />)}				
			</ul>
			)
			
		return (
			<div className="container">
				<div className="row">

			<div className="panel-default">
				<div className="head">
					<TodoHead addTodo={this.props.model.addTodo}  />
				</div>
				<div className="body">
				{main}
				</div>
				<div className="foot">
				<TodoFoot activeTodoCount={activeTodoCount} changeType={this.changeType} filterType={this.state.filterType} removeComplete={this.props.model.removeComplete}/>
				</div>
			</div>
				

				</div>
			</div>
			

			)
	}
}