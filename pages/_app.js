import '../styles/globals.css'

import React from 'react'
const { useState } = React;

// Context API
import Context from '../lib/Context';

// Components
import Cursor from '../components/elements/Cursor'

function MyApp({ Component, pageProps }) {

  // Context API States
  const [activeIndex, setActiveIndex] = useState(1);
  const [runAnimation, setRunAnimation] = useState(false);
  const [isOpen, setOpen] = useState(false)

  return (
    <Context.Provider value={{
      index : [activeIndex, setActiveIndex],
      animation: [runAnimation, setRunAnimation],
      videModal: [isOpen, setOpen]
    }}>
      <Cursor />
      <Component {...pageProps} />
    </Context.Provider>
  )

}

export default MyApp
