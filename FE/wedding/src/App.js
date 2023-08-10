import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3"
import Seciton4 from "./components/section4/Seciton4";
import Section5 from "./components/section5/Section5";
import Section7 from "./components/section7/Section7";
import SectionSub from "./components/section-sub/SectionSub";
import Footer from "./components/footer/Footer";


import "../../wedding/src/views/css/App.css";

function App() {
  return (
   <div className="App">
    <Section1/>
    <Section2/>
    <Section3/>
    <Seciton4/>
    <Section5/>
    <Section7/>
    <SectionSub/>
    <Footer/>
   </div>
  );
}

export default App;
