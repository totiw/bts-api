import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Checklist from "./Checklist";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checklist" element={<Checklist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
