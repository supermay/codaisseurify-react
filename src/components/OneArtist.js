import React, { PureComponent } from 'react';

class OneArtist extends PureComponent {
  render(){
    const { name, country, isBand } = this.props
    return(
      <article className='artist'>
        <ul>
          <li>
            <h1>{ name }</h1>
            <p>{ country }</p>
            <p> { isBand && <p>IsBand</p>}</p>
          </li>
        </ul>
      </article>
    )
  }
}

export default OneArtist;
