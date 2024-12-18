import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from 'components/Layout'
import Home from 'components/Home'
import { About } from 'components/About'
import { GetInTouch } from 'components/GetInTouch'
import { Projects } from 'components/Projects'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<GetInTouch />} />
          <Route />
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}
