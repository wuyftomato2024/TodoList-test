import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Main } from './pages/main/main';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Loginpage } from "./pages/Login/login";

function App() {

  return (
   
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Navigate to={"/main"} />}/>
            <Route exact path="/main" element={<Main />}/>
            <Route exact path="/Login" element={<Loginpage />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    
  );

};

export default App;
