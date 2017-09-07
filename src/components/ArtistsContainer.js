import React, { PureComponent } from 'react';
import Title from './Title';
import OneArtist from './OneArtist';


class ArtistsContainer extends PureComponent {
  renderArtist(artist,index){
    return (
      <OneArtist key={index} {...artist} />
    )
  }

  render() {
    return (
      <div className='artists wrapper'>
        <header>
          <Title content='Artists' />
        </header>

        <main>
          { this.props.artists.map(this.renderArtist) }
        </main>
      </div>
    )
  }
}

export default ArtistsContainer;
