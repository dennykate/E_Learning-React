import React from "react";
import {
  Home,
  About,
  Class,
  Marketing,
  Teacher,
  TopButton,
  Contact,
  DailyUpdate,
  Subscribe,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Class />
      <Marketing />
      <Teacher />
      <Contact />
      <DailyUpdate />
      <Subscribe />
      <Footer />

      <TopButton />
    </div>
  );
};

export default App;
