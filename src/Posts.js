import React from 'react';

const Posts = (props) => {
  return (
    <div>
      <h2>Notes: </h2>
    <ul>
      {props.data.map(note => <li key={note.id}>{note.firstname} {note.lastname}, {note.phone}, {note.role}, {note.msg}</li>)}
    </ul>
    </div>
  );
};

export default Posts;