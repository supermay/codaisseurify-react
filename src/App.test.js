import React from 'react';
import App from './App';
import Title from './components/Title';

import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme())

describe('<App />',() => {
  const app = shallow(<App />)

  it('wraps everything in a div tag',() => {
    expect(app).to.have.tagName('div')
  })

  it('contains a Title',() => {
    expect(app).to.have.descendants(Title)
  })

  it('sets the Title to "Leonard Cohen"', () => {
    expect(app).to.contain(<Title content="Leonard Cohen" />)
  })

})
