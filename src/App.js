import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
