import { Helmet } from "react-helmet";
import "./App.css";
import Counter from "./Components/Counter";
import { Route, Routes } from "react-router-dom";
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

      <Counter />
      <Routes>
        <Route component={<PageNotFound />}></Route>
        <Route component={<ErrorBoundary />}>ErrorBoundary Page</Route>
      </Routes>
    </div>
  );
}

export default App;
