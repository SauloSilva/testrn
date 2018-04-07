import React from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';

const Post = ({ post, onDelete }) => (
  <View>
    <Text>{post.title}</Text>
    <Text>{post.description}</Text>

    <Button title='Delete post' onPress={() => { onDelete(post.id) }} />
  </View>
);

export default Post;
