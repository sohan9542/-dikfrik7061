import React from "react";
import Router from "./Config/Router";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
export const URI = process.env.REACT_APP_API_URL;
function App() {
  
  return (
 <Router />
  );
}

export default App;