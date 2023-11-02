import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const days = 7;

const Post = ({ post }) => {
  if (!post || !post.image) {
    return null; // Si 'post' es nulo o no tiene 'image', no renderizamos nada
  }

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', { postId: post.id });
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image  */}
      <Image style={styles.image} source={{ uri: post.image }} />

      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.newPrice} </Text> / night
      </Text>

      {/*  Total price */}
      <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
    </Pressable>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    bed: PropTypes.number.isRequired,
    bedroom: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    oldPrice: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
  }),
};

export default Post;
