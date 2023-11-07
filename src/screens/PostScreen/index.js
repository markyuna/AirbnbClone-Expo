import React from 'react';
import { View, Text } from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import { useRoute } from '@react-navigation/native';

import places from '../../../assets/data/search';


const PostScreen = (props) => {
  const route = useRoute();

  const post = places.find(place => place.id === route.params.postId);

  if (!post) {
    return null; // Si 'post' no se encuentra, puedes manejarlo de la manera que prefieras
  }

  return (
    <View style={{ backgroundColor: 'white' }}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
