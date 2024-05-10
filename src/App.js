import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Main } from './pages/main/main';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to={"/main"} />}/>
        <Route exact path="/main" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
