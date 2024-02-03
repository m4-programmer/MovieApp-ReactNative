import { Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import { styles as themes } from '../themes'
let {width, height} = Dimensions.get("window")
const MovieList = ({title, data, showSeeAll = true}) => {
    const navigation = useNavigation()
    const handleClick = (item) => {
        navigation.push('Movie', item);
    }
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center" >
        <Text className="text-white text-2xl font-bold">{title}</Text>
        {showSeeAll && <TouchableOpacity>
            <Text className="text-lg" style={themes.text}>See All</Text>
        </TouchableOpacity>}
      </View>
      {/* movie row */}
        <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15,}}
        >
            {data.map((item, index) => (
                 
                <TouchableOpacity key={index} onPress={() => handleClick(item.id)}>
                    <View className="space-y-1 mr-4">
                        <Image 
                            source={require(`../assets/icon.png`)}
                            style={{
                                width: width*0.3,
                                height: height*0.22,
                            }}
                            className="rounded-3xl"
                        />
                        <Text className="text-neutral-300 ml-1">  
                            {(item.name && item.name.length > 15) ? item.name.substring(0, 15) + '...' : 'No title' }
                        </Text>
                    </View>
                    
                </TouchableOpacity>
                 
            ))}
        </ScrollView>

    </View>
  )
}

export default MovieList

const styles = StyleSheet.create({})