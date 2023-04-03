import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import Login from './componets/Login';
import Posts from "./componets/Post";
import PostsFavorites from "./componets/PostsFavorites";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='/posts/destacados' element={<PostsFavorites/>} />
      </Routes> 
    </Router>


    
  );
}

export default App;
