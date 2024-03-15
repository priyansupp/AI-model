import Header from './components/header';
import Homepage from './pages/homePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Models from './pages/models';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/models' element={<Models />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
