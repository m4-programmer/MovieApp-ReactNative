import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'

const TrendingMovies = ({data}) => {
  return (
    <View className="mb-8">
      <Text className="text-white text-2xl font-bold mx-4 mb-5">Trending</Text>
        <Carousel 
            data={data}
            renderItem={({item}) => (
                <MovieCard item={item} />
            )}

            />
    </View>
  )
}
const MovieCard = ({item}) => {
  return (
    <View>
      <Text>{item}</Text>
    </View>
  )
}

export default TrendingMovies

const styles = StyleSheet.create({})