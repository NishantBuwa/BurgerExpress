import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import '../../styles/ContactStyle.css'
import Section2 from './Section2'

function Contact() {
  return (
    <div>
      <Layout>
        <Section1></Section1>
        <Section2></Section2>
      </Layout>
    </div>
  )
}

export default Contact
