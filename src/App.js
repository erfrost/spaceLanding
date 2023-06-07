import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import DestinationPage from "./pages/destination/destinationPage";
import CrewPage from "./pages/crew/crewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
