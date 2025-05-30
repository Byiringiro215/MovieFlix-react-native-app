import React,{useState} from 'react'
import {View,Text,Button,FlatList,Modal, TouchableOpacity,ImageBackground,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ReviewForm from 'components/ReviewForm';
import { BlurView } from 'expo-blur';
type RootStackParamList = {
  'Review Details': Object;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Review = {
  title: string;
  rating: number;
  body: string;
  key: number;
};

const Home = ({navigation}: {navigation: HomeScreenNavigationProp}) => {
    // function handleNavigate(){
    //     navigation.navigate('Review Details');
    // }
const [reviews,setReviews]=useState([
    {
        title: 'Zelda: Breath of the Wild',
        rating: 1,
        body: 'An expansive and immersive open-world experience with stunning visuals and engaging gameplay.',
        key: 1,
      },
      {
        title: 'The Witcher 3: Wild Hunt',
        rating: 3,
        body: 'A masterclass in storytelling and character development, set in a richly detailed world.',
        key: 2,
      },
      {
        title: 'Stardew Valley',
        rating: 4,
        body: 'A relaxing farming simulator with charming graphics and surprisingly deep gameplay mechanics.',
        key: 3,
      },
      {
        title: 'Celeste',
        rating: 5,
        body: 'A beautifully crafted platformer with tight controls and an emotionally impactful story.',
        key: 4,
      },
])
const [visible,setVisible]=useState(false);
function addReview(review: { title: string; body: string; rating: string }){
  const newReview: Review = {
    ...review,
    rating: Number(review.rating),
    key: Math.random()
  };
  setReviews((prevReview: Review[])=>{
    return [newReview,...prevReview];
  });
  setVisible(false);
}
  return (
    <ImageBackground
      source={require('assets/game_bg.png')}
      className="flex-1"
      resizeMode='cover'
    >
      <View>
        <MaterialIcons 
          name="add-circle"
          className='text-center mt-2'
          size={26} 
          color="black" 
          onPress={()=> setVisible(true)}
        />
        <FlatList 
          data={reviews}
          renderItem={({ item }: { item: Review }) => (
            <TouchableOpacity
              className='border border-gray-500 p-5 mx-5 my-2 rounded-lg'
              onPress={() => navigation.navigate('Review Details', item)}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<Modal
        visible={visible}
        animationType='slide'
        transparent={true}
      >
        <BlurView intensity={50} tint="dark" className="flex-1">
          <View className='flex-1 bg-white/90'>
            <MaterialCommunityIcons 
              name="close-circle-outline"
              className='self-end mr-3 my-2 cursor-pointer'
              size={24} 
              color="black"
              onPress={()=>setVisible(false)}
            />
            <ReviewForm addReview={addReview}/>
          </View>
        </BlurView>
      </Modal>

</TouchableWithoutFeedback>
      
    </ImageBackground>
  )
}

export default Home
