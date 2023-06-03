import "./App.css";
import Login from "./component/login";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Dashbord from "./Dashbord";
import Addfee from "./component/Addfee";
import Search from "./component/Search";
import Searchname from "./component/Searchname";
import Edit from "./Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route  path="/Signup" element={<Signup />} />
        <Route path="/Dashbord" element={<Dashbord/>}/>
        <Route path="/Addfee" element={<Addfee/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/Searchname" element={<Searchname/>}/>
        <Route path="/Edit" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
