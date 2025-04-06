import "./styles/style.css";
import "./styles/layout.css";
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
      <main>
        <Routes>
          <Route path="/" element ={<Main/>}></Route>
          <Route  path="*" element={<NotFound/>}></Route>
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