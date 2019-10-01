import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import AddTaskForm from './components/TodoComponents/TodoForm'



const initalList = [
  {
    task: "aNewTask",
    id: "0",
    isCompleted: false
  },
  {
    task: "anotherTask",
    id: "1",
    isCompleted: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props){
    super(props);

    this.state = {
      tasks: initalList
    }
    this.markCompleted = this.markCompleted.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  markCompleted(id){
    const { tasks } =  this.state;
    // console.log(isCompleted);
    const unMarkedTasks = tasks.filter(task => task.id !== id)
    const task = tasks.filter(task => task.id === id)[0]
    task.isCompleted = !task.isCompleted
    const newTasks =[...unMarkedTasks, task]
    
    this.setState({
      tasks: newTasks
    })
    console.log(tasks);
    
  }

  addTask(formValues, actions){
    const { tasks } =  this.state;
    const newTask = {
      task: formValues.task,
      id: Date.now(),
      isCompleted: false
    }
    
    const newTasks = [...tasks, newTask]
    
    actions.resetForm();
    this.setState({
      tasks: newTasks
    })
    console.log(tasks);
  }

  render() {
    // const { tasks } = this.state;
    // const { markCompleted } = this.props;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <AddTaskForm onSubmit={this.addTask} />
        <TodoList tasks = {this.state.tasks} markCompleted={this.markCompleted}/>
      </div>
    );
  }
}

export default App;
