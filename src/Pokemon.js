import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Pokemon.css'
import PokemonUser from './PokemonUser'

class Pokemon extends Component {
  state = {
    pokemon: '',
  }

  handleChange = (ev) => {
    this.setState({ pokemon: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokemon}`)
  }

  render() {
    return (
      <div className="Pokemon">
        <img
          src="http://backgroundcheckall.com/wp-content/uploads/2017/12/pokemon-logo-transparent-background-2.png"
          alt="Pokemon"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.pokemon}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up Pokemon
            </button>
          </div>
        </form>

        <Route path="/pokemon/:pokemon" component={PokemonUser} />
      </div>
    )
  }
}

export default Pokemon