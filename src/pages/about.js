import React from "react"
import { Link } from "gatsby"
import { CSSTransitionGroup } from 'react-transition-group'

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
      <h1>About Me</h1>
      <p>Welcome to the about me page</p>
    </CSSTransitionGroup>
  </Layout>
)

export default About
