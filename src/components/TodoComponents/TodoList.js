// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
    constructor(props){
        super(props);


    }

    render() {
        const { tasks } = this.props;
        const { markCompleted } = this.props;
        return(
            <>
                {
                    tasks.map(task => <Todo task = {task.task} isCompleted = {task.isCompleted} id = {task.id} markCompleted={markCompleted}/>)
                }
            </>
        )
    }
}
