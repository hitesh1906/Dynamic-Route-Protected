import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
        {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
