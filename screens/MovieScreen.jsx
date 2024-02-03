import { Dimensions, Platform,SafeAreaView, ScrollView, StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
// import {  } from 'react-native-safe-area-context';
import { styles as themes, theme } from '../themes'
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';

let {width, height} = Dimensions.get("window")
const ios = Platform.OS == 'ios'
const topMargin = ios ? 0 : 'mt-10'
const MovieScreen = () => {
    const navigation = useNavigation();
    const {params: item} = useRoute();

    const [isFavorite, setFavorite] = React.useState(false)
    const [cast, setCast] = React.useState([1,2,3,4,5])
    const [similarMovies, setSimilarMovies] = React.useState([1,2,3,4,5])
    const [loading, setLoading] = React.useState(false)
    const toggleColor = () => {
        setFavorite(prevIsFavorite => {
            const newIsFavorite = !prevIsFavorite;
            return newIsFavorite;
        });
    }
    
    useEffect(() => {
        //call the movie detail api
    },[item])
  return (
    <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        className="flex-1 bg-neutral-900"
        showsVerticalScrollIndicator={false}
        bounces={false}
    >
      {/* back button and movie poster */}
      <View className="w-full  bg-transparents">
        <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-2  "+ topMargin}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={themes.background} className="rounded-xl ml-2 p-1">
                <ChevronLeftIcon size={28} color="white" strokeWidth={2.5} />
            </TouchableOpacity>

            <TouchableOpacity className="rounded-xl p-1 mr-2"  onPress={toggleColor}>
                <HeartIcon size={35} color={isFavorite ? "red" : "white"} strokeWidth={2.5} />
            </TouchableOpacity>
        </SafeAreaView>

        {/* Movie Poster */}
        {loading ? <Loading /> : (
             <View>
                <Image source={require(`../assets/icon.png`)} 
                style={{width: width, height: height*0.55}} />
    
                <LinearGradient 
                    colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
                    style={{ width: width, height: height*0.4}}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0"
                />
            </View>
        )}
      </View>

      {/* movie details */}
      <View style={{marginTop: -(height*0.09)}} className="space-y-3">
        {/* Title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
            {item?.name ? item.name : "Aqua Man"}
        </Text>
        {/* status, release, runtime */}
        <Text className="text-neutral-400 font-semibold text-base  text-center ">
            Released . 2020 . 160 min
        </Text>

        {/* genres */}
        <View className="flex-row items-center justify-center space-x-2">
            <Text className="text-neutral-400 font-semibold text-base text-center ">
                Action .
            </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center ">
                Adventure .
            </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center ">
                Comedy
            </Text>
        </View>
        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide ">
            Super-Hero partners Scott Lang and Hope Van Dyne, along with Peter Quill, to save the universe.

        </Text>
      </View>

      {/* casts */}
      <Cast cast={cast} navigation={navigation} />

      {/* similar movies */}
      <MovieList title="Similar Movies" data={similarMovies} showSeeAll={false} />
    </ScrollView>
  )
}

export default MovieScreen

const styles = StyleSheet.create({})