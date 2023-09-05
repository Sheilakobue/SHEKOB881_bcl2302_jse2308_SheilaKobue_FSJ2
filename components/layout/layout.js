import React from 'react'
import { Fragment } from 'react'

export default function Layout(props) {
  return (
    <Fragment>
      <header></header>
      <main>{props.children}</main>
    </Fragment>
  );
  
}
