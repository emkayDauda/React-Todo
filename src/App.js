import React from 'react';
import TodoList from './components/TodoComponents/TodoList'



const initalList = [
  {
    task: "aNewTask",
    id: "",
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
    // this.markCompleted = this.markCompleted.bind(this);
  }
  markCompleted(){
    const { isCompleted } =  this.state;
    console.log(isCompleted);
    this.setState({
      isCompleted: !isCompleted
    })
    
  }

  render() {
    const { tasks } = this.state;
    // const { markCompleted } = this.props;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks = {tasks} markCompleted={this.markCompleted}/>
      </div>
    );
  }
}

export default App;
