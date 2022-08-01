
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch getGifs={this.getGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  getGifs = (search = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=kaReNTDkkNKcqSySCAbFbUb1bpti8gji&rating=g`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  componentDidMount() {
    this.getGifs()
  }
}

export default GifListContainer