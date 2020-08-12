import React from "react"
import ReactDOM from "react-dom"

interface HelloProps {
  name: string
}

const Hello = (props: HelloProps) => (
    <div>Hello, {props.name}!</div>
)


document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("series_data")
    const data = JSON.parse(node.getAttribute("data"))

    ReactDOM.render(
        <Hello name="TypeScript" />,
        node,
    )
})
