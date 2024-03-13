import Header from './components/header';
import Homepage from './pages/homePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Models from './pages/models';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/models' element={<Models />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
