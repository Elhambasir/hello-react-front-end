import React from "react";

function Greeting(props) {
  return (
    <div>
      <h1>Greetings</h1>
      { [props.greeting].map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.greeting}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Greeting;