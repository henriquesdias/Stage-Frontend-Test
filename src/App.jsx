import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateProcess from "./pages/CreateProcess";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-process" element={<CreateProcess />} />
      </Routes>
    </BrowserRouter>
  );
}
