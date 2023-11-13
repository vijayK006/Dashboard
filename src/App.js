import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
 <>
<BrowserRouter>

<Routes>
<Route path="/" element={<Dashboard/>}/>
</Routes>

</BrowserRouter>
 </>
  );
}

export default App;
