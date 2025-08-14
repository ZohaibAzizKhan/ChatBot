import Login from "./login/Login";
import pic from "../../assets/pexels-pavel-danilyuk-8438918.jpg"
import Registration from "./registration/Registration";
import { Outlet } from "react-router-dom";

function Layout(){
  return(
  <>
  <div className={`w-full p-2 flex justify-center items-center h-dvh bg-cover bg-center`} style={{backgroundImage: `url(${pic})`}}>
    <div className="lg:w-1/3 w-full">
      <Outlet></Outlet>
    </div>
  </div>
  </>)
}
export default Layout;