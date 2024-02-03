import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles as themes, theme } from '../themes'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import MovieList from '../components/MovieList';



let {width, height} = Dimensions.get("window")
const ios = Platform.OS == 'ios';
const verticalMargin = ios ? '' : 'my-3'
const PersonScreen = () => {
    const navigation = useNavigation()
    const [isFavorite, setFavorite] = React.useState(false)
    const [personMovies, setPersonMovies] = React.useState([1,2,3])
    const toggleColor = () => {
            setFavorite(prevIsFavorite => {
                const newIsFavorite = !prevIsFavorite;
                return newIsFavorite;
            });
        }
  return (
    <ScrollView 
        className="flex-1 bg-neutral-900" 
        contentContainerStyle={{paddingBottom: 20}}s
    >
      {/* back button */}
       <SafeAreaView className={" z-20 w-full flex-row justify-between items-center px-2  "+ verticalMargin}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={themes.background} className="rounded-xl ml-2 p-1">
                <ChevronLeftIcon size={28} color="white" strokeWidth={2.5} />
            </TouchableOpacity>

            <TouchableOpacity className="rounded-xl p-1 mr-2"  onPress={toggleColor}>
                <HeartIcon size={35} color={isFavorite ? "red" : "white"} strokeWidth={2.5} />
            </TouchableOpacity>
        </SafeAreaView>

        {/* Person Details */}
        <View>
            <View className="flex-row justify-center"
                style={{shadowColor: 'gray', shadowRadius: 40, shadowOffset: {width: 0, height: 5}, shadowOpacity: 1}}>
                <View className="overflow-hidden rounded-full items-center h-72 w-72 border-2 border-neutral-500">
                    <Image source={require(`../assets/icon.png`)} style={{width: width*0.74, height: height*0.43}} />
                </View>
            </View>

            <View className='mt-6'>
                <Text className="text-white text-3xl text-center">Keanu Really</Text>
                <Text className="text-base text-neutral-400 text-center">Actor, Producer, Writer</Text>
            </View>

            <View className="mt-6 mx-3 p-4 flex-row justify-between items-center bg-neutral-700 rounded-full">
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                    <Text className="text-white font-semibold ">Gender</Text>
                    <Text className="text-neutral-300 text-sm ">Male</Text>
                </View>

                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                    <Text className="text-white font-semibold ">Birthday</Text>
                    <Text className="text-neutral-300 text-sm ">1998-01-01</Text>
                </View>

                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                    <Text className="text-white font-semibold ">Known for</Text>
                    <Text className="text-neutral-300 text-sm ">Acting</Text>
                </View>

                <View className="px-2 items-center">
                    <Text className="text-white font-semibold ">Popularity</Text>
                    <Text className="text-neutral-300 text-sm ">64.24</Text>
                </View>
            </View>

            {/* Biography */}
            <View className="my-6 mx-3 space-y-2">
                <Text className="text-white text-lg ">Biography</Text>
                <Text className="text-neutral-400 tracking-wide ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                </Text>
            </View>

            {/* Movie List for Actor */}
            <MovieList title={"Movies"} data={personMovies} showSeeAll={false} />

        </View>
    </ScrollView>
  )
}

export default PersonScreen

const styles = StyleSheet.create({})