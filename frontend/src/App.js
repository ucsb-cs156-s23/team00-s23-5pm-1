import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import TampaPage from "main/pages/TampaPage";
import NevadaCityPage from "main/pages/NevadaCityPage";
import LosAngelesPage from "main/pages/LosAngelesPage";
import MiamiPage from "main/pages/MiamiPage"
import SantaCruzPage from "main/pages/SantaCruzPage";
import "bootstrap/dist/css/bootstrap.css";


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
        <Route exact path="/towns/NevadaCity" element={<NevadaCityPage />} />
        <Route exact path="/towns/LosAngeles" element={<LosAngelesPage />} />
        <Route exact path="/towns/Miami" element={<MiamiPage />} />
        <Route exact path="/towns/SantaCruz" element={<SantaCruzPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
