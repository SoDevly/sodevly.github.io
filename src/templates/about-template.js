import React from 'react'
import Layout from '../components/Layout'
import About from '../components/About'
import { useSiteMetadata } from '../hooks'

const AboutTemplate = () => {
  const { author } = useSiteMetadata()

  return (
    <Layout title={`${author.name} | About`} className="bg-black">
      <About />
    </Layout>
  )
}

export default AboutTemplate
