import React from 'react'
import { withRouter } from 'react-router-dom';

const User = (props) => {
    console.warn(props.match.params.id)

  return (
    <div>
        <h1>Hello This is user no.{props.match.params.id}</h1>
        <h1>user name {props.match.params.name}</h1>
        <h1>user email {props.match.params.email}</h1>

    </div>
  )
}

export default withRouter(User);