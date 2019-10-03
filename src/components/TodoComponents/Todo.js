import React from "react";
import styled from "styled-components";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCompleted: false
    };

    // this.markCompleted = props.markCompleted.bind(this);
  }

  render() {
    const { task, id, markCompleted, isCompleted } = this.props;
    // const {  } = this.state;

    return (
      <div>
        {isCompleted ? (
          <CrossedH5 onClick={() => markCompleted(id)}>{task}</CrossedH5>
        ) : (
          <h5 onClick={() => markCompleted(id)}>{task}</h5>
        )}
      </div>
    );
  }
}

const CrossedH5 = styled.h5`
  text-decoration: line-through;
`;
