import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Sidebar from '../Sidebar'
import data from './data.json'

const { Content } = Layout
const About = () => (
  <>
    <Sidebar hideMobile={true} />
    <Content className="m-5">
      {data.header && <Header header={data.header} />}
    </Content>
  </>
)

export default About
