import React from 'react';

function Greeting(greeting) {
  return (
    <div>
      <h1>Greetings</h1>
      { [greeting].map((item) => (
        <div key={item.id}>
          <h2>{item.greeting}</h2>
        </div>
      ))}
    </div>
  );
}

export default Greeting;
