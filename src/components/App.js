import React from 'react'
import GifList from './GifList'
import GifListContainer from './GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
