import Header from './components/header';
import Homepage from './pages/homePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Models from './pages/models';
import NewModelPage from './pages/newModel';
import ModelDesc from './pages/modelDesc';
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/profile';
import { CookiesProvider } from 'react-cookie';

function App() {
  
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='/models' element={<Models />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/newModel' element={<NewModelPage />} />
            <Route path='/modelDesc' element={<ModelDesc />} />
          </Routes>s
        </BrowserRouter>
      </div>
    </CookiesProvider>
  );
}

export default App;
