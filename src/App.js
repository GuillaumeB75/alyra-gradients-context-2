import React from "react";
import Home from "./pages/Home"
import PleinEcran from "./pages/PleinEcran"
import { Switch, Route } from "react-router-dom";

function App() {  
  return (
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/gradient/:id" component={PleinEcran}/>
    </Switch>
    
  )
}

export default App
