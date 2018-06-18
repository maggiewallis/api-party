import React, { Component } from 'react'

class PokemonUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemon !== this.props.match.params.pokemon) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${params.pokemon}`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  render() {
    const { pokemon } = this.state

    return (
      <div className="PokemonUser">
        <h1>
          {pokemon.name}
        </h1>
      </div>
    )
  }
}

export default PokemonUser