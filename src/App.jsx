import { Helmet } from "react-helmet";
import "./App.css";
import Counter from "./Components/Counter";
import { Route, Routes, Link, redirect } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <div className="container">
      <Helmet>
        <title>React Counter App</title>
        <meta
          name="description"
          content="My attempt at building a react counter app, this is my entry for second semester exam for AltSchool Frontend Enginnering"
        />
      </Helmet>

      <h1 className="app-header">Tolulope's React Counter App</h1>
      <ul className="navbar-space">
        <li className="navbar-items">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ErrorBoundary">ErrorBoundary</Link>
        </li>
        <li>
          <Link to="/PageNotFound">PageNotFound</Link>
        </li>
      </ul>

      <Counter />
      <Routes>
        <Route path="/ErrorBoundary" element={<ErrorBoundary />}></Route>
      </Routes>
    </div>
  );
}

export default App;
