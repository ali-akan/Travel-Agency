import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/:destinationId" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
