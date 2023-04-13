import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import TampaPage from "main/pages/TampaPage";
import "bootstrap/dist/css/bootstrap.css";
import SantaCruzPage from "main/pages/SantaCruz";


function App() {

  return (
    <BrowserRouter basename="/team00-s23-5pm-1">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        <Route exact path="/towns/SantaCruz" element={<SantaCruzPage />} />
        <Route exact path="/towns/Tampa" element={<TampaPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
