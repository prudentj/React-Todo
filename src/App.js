import React from 'react';
import 'typeface-roboto';
import TodoForm from './components/TodoComponents/TodoForm';
import Container from '@material-ui/core/Container';
import TodoList from './components/TodoComponents/TodoList';
class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todoItems: []
		};
	}

	addItem = el => {
		const newItem = {
			name: el,
			id: Date.now(),
			completed: false
		};
		this.setState({
			todoItems: [...this.state.todoItems, newItem]
		});
	};

	checkItem = id => {
		const newTodoItems = this.state.todoItems.map(item => {
			if (item.id === id) {
				return {
					...item,
					completed: !item.completed
				};
			} else {
				return item;
			}
		});
		console.log(`Item was checked ${id}`);
		this.setState({
			todoItems: newTodoItems
		});
	};
	clearCompleted = id => {
		const uncompletedTodoItems = this.state.todoItems.filter(
			item => item.completed === false
		);
		console.log(uncompletedTodoItems);
		this.setState({
			todoItems: uncompletedTodoItems
		});
		console.log(this.state.todoItems);
	};
	/*
  Apparelty you can pass the state to other components and have them change it
	// handleChanges = el => {
	// 	this.setState({input_text: el.target.value});
	// };

	// handleSubmit = el => {
	// 	el.preventDefault();
	// 	console.log(`${this.addItem.TodoList} was submited`);
	// 	this.addItem(this.state.TodoList);
	// };
*/
	render() {
		return (
			<Container>
				<h2>Welcome to your Todo App!</h2>
				{
					<Container>
						<TodoForm checkItem={this.checkItem} addItem={this.addItem} />
						<TodoList
							todoItems={this.state.todoItems}
							checkItem={this.checkItem}
							clearCompleted={this.clearCompleted}
						/>
					</Container>
				}
			</Container>
		);
	}
}

export default App;
