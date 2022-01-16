import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css"
import Detail from './components/Detail'


function App() {

  return (
    <div >
      {/* <Router>
        <switch>
      <Route path="/home" componenet={Home}><Home /></Route>
      <Route path="/productlist" componenet={ProductList}><ProductList /></Route>
      <Route path="/detail" componenet={Detail}><Detail /></Route>
      </switch>
      </Router> */}
      <Home />
      <ProductList />
      <Detail />
    </div>
  );
}

export default App;
