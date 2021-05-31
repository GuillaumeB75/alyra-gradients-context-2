import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router } from "react-router-dom"
import { GradientsContextProvider } from "./context/GradientsContext"

ReactDOM.render(
  <React.StrictMode>
    <GradientsContextProvider>
      <Router>
        <App />
      </Router>
    </GradientsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()


// import React from "react"
// import ReactDOM from "react-dom"
// import "bootstrap/dist/css/bootstrap.css"
// import "./index.css"
// import App from "./App"
// import * as serviceWorker from "./serviceWorker"
// import {BrowserRouter as Router} from "react-router-dom";
// import {GradientsContextProvider} from "./context/GradientsContext"

// ReactDOM.render(

//     <Router>
//       <GradientsContextProvider>
//       <App />
//       </GradientsContextProvider>
//     </Router>
//  ,
//   document.getElementById("root")
// )

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
