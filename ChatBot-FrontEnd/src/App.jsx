import Layout from "./components/authentication/Layout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/authentication/login/Login";
import Registration from "./components/authentication/registration/Registration";
function App(){
  return(<>
  <Router>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Login/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        </Route>
    </Routes>
  </Router>
  
  </>)
}
export default App;