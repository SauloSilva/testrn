import React from 'react';
import { Button } from 'react-native';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Post from '../../src/Post';
import { wrap } from 'module';

const post = {id: 1, title: 'Test', description: 'test description'};

describe('Testing post', () => {
  it('can delete post', () => {
    const deletePostSpy = sinon.spy();
    const wrapper = shallow(<Post post={post} onDelete={deletePostSpy} />);

    wrapper.find(Button).simulate('press');
    expect(deletePostSpy.withArgs(post.id).calledOnce).toBe(true);
  });
});