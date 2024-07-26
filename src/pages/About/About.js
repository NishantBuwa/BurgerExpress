import React from 'react'
import Section1 from '../About/Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Layout from '../../components/Layouts/Layout'
function About() {
  return (
    <div>
      <Layout>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
      </Layout>

    </div>
  )
}

export default About