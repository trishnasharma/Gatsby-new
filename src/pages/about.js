import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Navbar from "../components/navbar"

const aboutPage = () => {
    return (
        <div>
            <title> About </title>
            <Header />
            <Navbar />
            <h2> About Us page </h2>
            <Link to = "/"> Back </Link>
            <p> text </p>
        </div>
    )
}

export default aboutPage

