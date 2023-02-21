import ProductListing from "./components/ProductListing";
import {LuckyNumber} from "./components/LuckyNumber";
import Login from "./components/Form/Login"
import Register from "./components/Form2/Register";
import Header from "./components/website/header";
import Navbar from "./components/website/Navbar";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Dashboard from "./components/website/Dashboard";
import Weather from "./components/weather/weather";
import PhoneBook from "./components/PhoneBook App/PhoneBook";

const route=createBrowserRouter([
  {path:'/',element:<Header/>},
  {path:'/login',element:<Login/>},
  {path:'/register',element:<Register/>},
  {path:'/dashboard',element:<Dashboard/>},
  {path:'/weather',element:<Weather/>}

]); 




function App() {
  return(
    <div>
      {/* <Navbar/>
      <RouterProvider router={route}/> */}
      <PhoneBook/>
    </div>
  );
}

export default App;
