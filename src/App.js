import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState , useEffect} from "react";
import Login from "./componets/Login";
import Posts from "./componets/Post";
import PostsFavorites from "./componets/PostsFavorites";
import { ProtectedRoute } from "./componets/ProtectedRoute";

import "./App.css";

function App() {
  
  const isAuthenticated = localStorage.getItem("token");
  const [Authenticated, setAuthenticated] = useState(null);

  const login = () => {
    const isAuth = isAuthenticated !== null && isAuthenticated !== undefined;
    setAuthenticated(isAuth);
  }
  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    
  }
  useEffect(() => {
    setAuthenticated(isAuthenticated !== null && isAuthenticated !== undefined);
  }, []);
  return (
    <Router>
      <Navigation />
      {Authenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={Authenticated} />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/destacados" element={<PostsFavorites />} />
        </Route>
      </Routes>
    </Router>
  );
}
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/">
          App
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              login
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/posts">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts/destacados">
              Posts Destacados
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
export default App;
