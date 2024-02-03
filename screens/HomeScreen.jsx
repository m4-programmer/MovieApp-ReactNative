import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import { styles as themes } from './../themes'
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/Loading';


const  ios =  Platform.OS == 'ios'

const HomeScreen = () => {
  const [trending, setTrending] = React.useState([1,2,3])
  const [upcoming, setUpcoming] = React.useState([1,2,3])
  const [topRated, setTopRated] = React.useState([1,2,3])
  const [loading, setLoading] = React.useState(false)
  const navigation = useNavigation();
  return (
    <View className='flex-1 bg-neutral-800'>
        {/* search bar and logo */}
      <SafeAreaView className={ios? "mb-2": "mt-10"}>
        <StatusBar style='light' />
        <View className='flex-row items-center justify-between mx-4'>
            <Bars3CenterLeftIcon size={30} strokeWidth={2} color={"white"} />
            <Text className="text-white text-3xl font-bold">
                <Text style={themes.text} >M</Text>ovies
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
            </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? <Loading /> : (

        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 10
        }}
        >
        {/* Trending movies carousel */}
        <TrendingMovies data={trending} />

        {/* upcoming movies row */}
        <MovieList title="Upcoming" data={upcoming} />

        {/* toprated movies row */}
        <MovieList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})