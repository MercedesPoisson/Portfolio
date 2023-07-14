import { Route, Routes, Outlet } from "react-router-dom";
import Portfolio from "./components/portfolio";
import Home from "./Views/home"
import 'tailwindcss/tailwind.css';
import About from "./components/About";
import Tech from "./components/Tech";

function App() {

  return (
    <div >
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route index element={<Portfolio />}/>
          <Route path="about" element={<About />}/>
          <Route path="tech" element={<Tech />}/>

        </Route>
        </Routes>   
    </div>
  );
}

export default App;
