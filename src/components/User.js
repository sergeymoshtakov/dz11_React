import React from 'react';

function User(props) {
    const {name, age} = props.user;
  return (
    <>
        <p>{name}</p>
        <p>{age}</p>
        <hr/>
    </>
  );
}

export default User;