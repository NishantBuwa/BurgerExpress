import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import '../../styles/HomeStyle.css'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

function Home() {
  return (
    <>
    <Layout>
      {/* Home Section banner Hero */}
      <Section1></Section1>
      {/* Home section about */}
      <Section2></Section2>
      {/* Home section Menu */}
      <Section3></Section3>
      {/* Home Section Promotion */}
      <Section4></Section4>
      {/* Home Section Shop  */}
      <Section5></Section5>
      {/* Home Section Blog  */}
      <Section6></Section6>
      {/* Home Section Contact */}
      <Section7></Section7>

    </Layout>

    </>
  )
}

export default Home
