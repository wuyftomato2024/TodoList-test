import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Main } from './pages/main/main';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

function App() {

  return (
   
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Navigate to={"/main"} />}/>
            <Route exact path="/main" element={<Main />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    
  );

};

export default App;
