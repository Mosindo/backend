import React from 'react';


const List = (props) => {
    return (
      <>
        <h2>List</h2>
        {props.students.map((student) => {
          return (
            <>
              <h2>{student.name}</h2>
            </>
          );
        })}
      </>
    );
  };
  
  export default List;