import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('15 - Crie um componente `<App />`', () => {
  let wrapper;
  it('Renderize `<Header />` dentro do componente `<App />`', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toEqual(1);
  });
}); // esse comentário fiz somente pra ver se aparece o meu Pull Request lá no github. Logo em seguida irei apagar este comentário.

describe('16 - Renderize `<MovieList />` dentro do componente `<App />`', () => {
  let wrapper;
  it('Renderize `<MovieList />` dentro do componente `<App />`', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('MovieList').length).toEqual(1);
  });
});
