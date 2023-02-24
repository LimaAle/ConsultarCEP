import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import HomeView from './src/pages/home/view';

describe('<App />', () => {
  it('renders correctly', () => {
    renderer.create(<HomeView/>)
  });
});
