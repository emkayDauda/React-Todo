import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isCompleted = false
        }

        this.markCompleted = props.markCompleted.bind(this);
    }


    render() {
        const { task } = this.props;
        const { isCompleted } = this.state;

        return (
            <div>
                <h5>
                    {task}
                </h5>
            </div>
        )
    }
}