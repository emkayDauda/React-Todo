import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';

export default class AddTaskForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Formik onSubmit={this.props.onSubmit}
            initialValues={{task : ''}}
               render = {props => {
                   return (
                       <Form>
                            <Field name='task' type='text' placeholder ='task'/>
                            <button type='submit'>Add task</button>
                       </Form>
                   )
               }}
            />
        )
    }
}