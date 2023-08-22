import axios from 'axios';
import { useState, useEffect } from 'react';
import Greeting from './components/greeting';

const API_URL = 'http://localhost:3000/api/v1/messages';
function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [greeting, setGreeting] = useState([]);

  useEffect(() => {
    const mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setGreeting(items.greeting);
      }
    });

    return () => (mounted);
  }, []);

  return (
    <div className="App">
      <Greeting greeting={greeting} />
    </div>
  );
}
export default App;
