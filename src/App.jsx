import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateProcess from "./pages/CreateProcess";
import CreateSubProcess from "./pages/CreateSubProcess";
import Process from "./pages/Process";
import SubprocessPage from "./pages/SubprocessPage";
import CreateEvent from "./pages/CreateEvent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-process" element={<CreateProcess />} />
        <Route path="/new-subprocess" element={<CreateSubProcess />} />
        <Route path="/process/:process_id" element={<Process />} />
        <Route
          path="/process/:process_id/:subprocess_id"
          element={<SubprocessPage />}
        />
        <Route path="/new-event" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}
