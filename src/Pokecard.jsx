import React, { Component } from 'react'
const POKE_API =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

class Pokecard extends Component {
  
  render () {
    let imgSrc = `${POKE_API}${this.props.id}.png`
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>Pokemon</h1>
        <div className='Pokecard-image'>
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div 
        className='Pokecard-data'>Type: {this.props.type}
        </div>
        <div 
        className='Pokecard-data'>Exp: {this.props.exp}
        </div>
      </div>
    )
  }
}

export default Pokecard
