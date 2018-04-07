import React from 'react';
import { Text, ScrollView, Button } from 'react-native';
import { shallow } from 'enzyme';

import List from '../../src/List';
import { wrap } from 'module';

const posts = [
  {id: 1, title: 'Test', description: 'test description'},
  {id: 1, title: 'Test', description: 'test description'},
  {id: 1, title: 'Test', description: 'test description'},
]

describe('Testing list', () => {
  it('show empty message if there are no posts', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.contains(<Text>Nenhum post</Text>)).toBe(true);

    wrapper.setState({ posts })
    expect(wrapper.contains(<Text>Nenhum post</Text>)).toBe(false);
  });

  it('renders as expected', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find(ScrollView).exists()).toBe(false);

    wrapper.setState({ posts })

    expect(wrapper.find(ScrollView).children()).toHaveLength(3);
  });

  it('can add new post', () => {
    const wrapper = shallow(<List />);
    wrapper.find(Button).simulate('press');
    
    expect(wrapper.state('posts')).toHaveLength(1);
  })
})
