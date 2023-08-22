import axios from 'axios';
import Greeting from './components/greeting';
import { useState, useEffect } from 'react';

const API_URL = "http://localhost:3000/api/v1/messages";
function getAPIData(){
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
const [greeting,setGreeting] = useState([]);

useEffect(()=> {
  let mounted = true;
  getAPIData().then((items) => {
    if (mounted) {
      setGreeting(items);
    }
  });

return () => (mounted = false);
},[]);

return (
<div className="App">
<Greeting greeting={greeting} />
</div>
);
}
export default App;

