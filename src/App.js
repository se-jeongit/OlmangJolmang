import "./styles/style.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./pages/main/Home"
import NotFound from "./components/error/NotFound";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <header>
      <Header/>
    </header>
              <Routes>
                  <Route path="/" element ={<Main/>}></Route>
                  <Route  path="*" element={<NotFound/>}></Route>
              </Routes>
              <footer>
              <Footer/>
              </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;