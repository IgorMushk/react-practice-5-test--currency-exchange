import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutHome } from "./LayoutHome";
import HomePage from "pages/HomePage/HomePage";
import RatesPage from "pages/RatesPage/RatesPage";
import { useEffect } from "react";
//import { getCurrentPosition } from "service/getCurrentPosition";
import { useDispatch } from "react-redux";
import { featchBaseCurrency } from "redux/operations";

export const App = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    
    function success(pos) {
      //getCurrentPosition(pos.coords)
      dispatch(featchBaseCurrency(pos.coords));
      
      // console.log("Your current position is:");
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
    
  }, [])

  return (
    <Routes>
      <Route path="/" element={<LayoutHome/>}> 
        <Route index element={<HomePage/>}/>
        <Route path="rates" element={<RatesPage/>}/>
      </Route>
      <Route path="*" element={<Navigate to={"/"}/>} />
    </Routes>
  );
};
