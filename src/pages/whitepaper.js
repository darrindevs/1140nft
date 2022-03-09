import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WhitePaper = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>This is the WhitePaper</h1>
    <p>Coming Soon</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WhitePaper
