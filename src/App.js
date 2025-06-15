import "./styles/style.css";
import "./styles/layout.css";
import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";
import Main from "./pages/main/Home.js";
import NotFound from "./components/error/NotFound.js";
import Join from "./pages/member/Join.js";
import Login from "./pages/member/Login.js";
import PwdReset from "./pages/member/PwdReset.js";
import ScheduleWrite from "./pages/schedule/Write.js";
import Admin from "./pages/admin/Admin.js";

import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Header/>
        </header>

        <main>
          <Routes>
            <Route path="/" element ={<Main/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/join" element={<Join/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/pwdReset" element={<PwdReset/>}></Route>
            <Route path="/schedule" element={<ScheduleWrite/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
          </Routes>
        </main>
        
        <footer className="doc-footer">
          <Footer/>
        </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;