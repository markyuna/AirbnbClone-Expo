import React from "react";
import { View, FlatList } from "react-native";
import Post from '../../components/Post';

function SearchResultsScreen(props) {
  const { posts } = props;

  console.log(props.posts);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
