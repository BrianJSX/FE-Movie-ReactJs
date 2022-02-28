import React from 'react'
import Header from "../Header";

function ProtectedPage({children}) {
  return (
    <React.Fragment>
        <Header></Header>
        {children}
    </React.Fragment>
  )
}

export default ProtectedPage