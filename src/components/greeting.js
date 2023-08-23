import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../features/greetings/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>Greetings</h1>
      <h2>{greeting}</h2>
    </div>
  );
}

export default Greeting;
