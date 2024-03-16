import Header from './components/header';
import Homepage from './pages/homePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Models from './pages/models';
import NewModelPage from './pages/newModel';
import ModelDesc from './pages/modelDesc';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/models' element={<Models />} />
          <Route path='/newModel' element={<NewModelPage />} />
          <Route path='/modelDesc' element={<ModelDesc />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
