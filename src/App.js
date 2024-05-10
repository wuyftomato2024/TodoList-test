import './App.css';
import TodoList from './main/TodoList';
import { BrowserRouter , Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/main" element={<TodoList/>}>
        </Route>
      
       </Routes>
    </BrowserRouter>
  );
};

export default App;
