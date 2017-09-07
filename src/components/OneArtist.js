import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';

class OneArtist extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    isBand: PropTypes.bool
  }
  render(){
    const { name, country, isBand } = this.props
    return(
      <article className='artist'>
        <ul>
          <li>
            <h1>{ name }</h1>
            <p>{ country }</p>
            { isBand && <p>IsBand</p>}
            <LikeButton />
          </li>
        </ul>
      </article>
    )
  }
}

export default OneArtist;
