import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Sidebar from "./Components/Sidebar";
import AllDetailsPage from "./Components/AllDetailsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="row" style={{  border:"2px solid black"}}>
          <div style={{ width: "20%" }}>
            <Sidebar /> {/* <h1>Sidebar</h1> */}
          </div>

          <div style={{ width: "80%" }}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/1">
                <AllDetailsPage pid="1" />
              </Route>
              <Route path="/2">
                <AllDetailsPage pid="2" />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
