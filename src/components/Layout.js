import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import Banner from './Banner';
import { OuterWrapper, InnerWrapper } from './globalStyling';

const Layout = ({ children }) => {
  return (
    <>
      <OuterWrapper>
        <Banner />
        <InnerWrapper>
          <Navigation />
          <main>{children}</main>
        </InnerWrapper>
      </OuterWrapper>
      <Footer />
    </>
  )
}

export default Layout
