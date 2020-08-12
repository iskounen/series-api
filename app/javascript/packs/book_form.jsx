import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello, {props.name}!</div>
)

Hello.defaultProps = {
  name: 'world'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('series_data')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Hello />,
    node,
  )
})
