import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Navbar from "../components/navbar"

const indexPage = () => {
  return (
    <div>
      <title>Home Page</title>
      <Header />
      <Navbar />
      <h1>Welcome</h1>
      <Link to = "/about"> About </Link>
      <p>text</p>
    </div>
  )
}

export default indexPage