import React, { Component } from 'react';

import { View, ScrollView, Text, Button } from 'react-native';

import Post from './Post';

export default class List extends Component {
  state = {
    posts: [],
  }

  renderPosts = () => (
    <ScrollView>
      { this.state.posts.map(post => <Post key={post.id} post={post} />) }
    </ScrollView>
  )

  addPost = () => {
    this.setState({
      posts: [
        ...this.state.posts,
        {id: Math.random, title: 'Test', description: 'description'},
      ]
    })
  }

  render() {
    return (
      <View>
        { this.state.posts.length > 0
          ? this.renderPosts()
          : <Text>Nenhum post</Text> }

        <Button title="Add post" onPress={this.addPost} />
      </View>
    )
  }
};