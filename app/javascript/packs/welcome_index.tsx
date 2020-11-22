import React from "react"
import ReactDOM from "react-dom"
import { Navigator } from "./components/Navigator"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Navigator />,
    document.body.appendChild(document.createElement("div")),
  )
})
