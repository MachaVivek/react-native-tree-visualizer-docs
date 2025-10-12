import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeveloperPage from "./compoents/DeveloperPage";
import NotFoundPage from "./compoents/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-gray-200">
        <Routes>
          <Route path="/developerMode" element={<DeveloperPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
