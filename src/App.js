import "./styles/style.css";
import "./styles/layout.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./pages/main/Home";
import NotFound from "./components/error/NotFound";
import Join from "./pages/member/Join";
import Login from "./pages/member/Login";
import IdFind from "./pages/member/IdFind";
import PwdCheck from "./pages/member/PwdCheck";
import ScheduleWrite from "./pages/schedule/Write";

import { BrowserRouter, Routes, Route  } from 'react-router-dom';

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
            <Route  path="*" element={<NotFound/>}></Route>
            <Route path="/join" element={<Join/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/idFind" element={<IdFind/>}></Route>
            <Route path="/pwdCheck" element={<PwdCheck/>}></Route>
            <Route path="/schedule" element={<ScheduleWrite/>}></Route>
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;