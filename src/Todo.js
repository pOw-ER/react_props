import React from 'react';

const Todo = (props) => {
  return (
    <li><img src={props.check} alt="" />{props.text}<img src={props.logo} alt="" /></li>
  );
}

export default Todo;
