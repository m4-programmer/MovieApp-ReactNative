import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading'

const {height, width} = Dimensions.get("window")
const SearchScreen = () => {
    const navigation = useNavigation()
    const [results, setResult] = React.useState([1,2,3,4])
    const [loading, setLoading] = React.useState(false)
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput 
            placeholder="Search Movie" 
            placeholderTextColor={"lightgray"}
            className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
         />
         <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full p-3 m-1 bg-neutral-500"
          >
            <XMarkIcon size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Result Layout */}
      {
        loading ? <Loading /> : results.length == 0 && <Text className="text-white text-center">No results found</Text>
      }
      {loading ? <Loading /> : (
          results.length > 0 && (
            <ScrollView 
            contentContainerStyle={{paddingBottom: 15}}
            showsVerticalScrollIndicator={false}
            className="space-y-3 mx-5"
          >
            <Text className="text-white ml-1 font-semibold">Results ({results.length})</Text>
    
            <View className="flex-row flex-wrap justify-between">
                {
                    results.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => navigation.push("Movie", item)} >
                               <View className="space-y-2 mb-4">
                                <Image 
                                    source={require(`../assets/icon.png`)} 
                                    style={{width: width*0.44, height: height*0.3}}
                                    className="rounded-3xl"
                                    />
                                    <Text className="text-neutral-300 ml-1">
                                        {(item.name && item.name.length > 15) ? item.name.slice(0, 15) + '...' : 'Movie Name' }
                                    </Text>
                               </View>
    
                            </TouchableOpacity>
                        )
                    })
                }
            </View >
    
          </ScrollView>
          )
      ) }
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})