import { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList,TextInput,Button,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


type Person = {
  name: string;
  id: string;
};
export default function Todo() {

  const [people, setPeople] = useState<Person[]>([
    { name: 'shaun', id: '1' },
    { name: 'mia', id: '2' },
    { name: 'liam', id: '3' },
    { name: 'zoe', id: '4' },
    { name: 'oliver', id: '5' },
    { name: 'ava', id: '6' },
    { name: 'lucas', id: '7' },
    { name: 'ella', id: '8' },
    { name: 'noah', id: '9' },
    { name: 'chloe', id: '10' },
  ]);
  
  function handlePress(id: string) {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id);
    });
  }

  const [text,setText]=useState("")
function handleChange(value: string) {
  setText(value);
}

function handleSubmit() {
  if(text.length > 3) {
    setPeople(prevPeople => [{ name: text, id: Math.random().toString() },...prevPeople ]);
    setText('');
  } else {
    Alert.alert('OOPs','Student name must be over 3 characters',
      [
        {text:'Understood',onPress:()=>console.log('Alert closed')}
      ]
    );
  }
}

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log('Keyboard dismissed');
      Keyboard.dismiss()
    }}>
      <View className='flex-1'>
        <View className='bg-orange-500 mt-16 py-3 items-center'>
          <Text className='text-white font-bold text-center text-2xl'>Students</Text>
        </View>
        <View className='px-2'>
          <TextInput 
            className='py-4 my-2 bg-gray-200 border-2 border-orange-700 rounded-md placeholder:text-blue-950'
            placeholder='eg.add student'
            placeholderTextColor="white"
            onChangeText={handleChange}
            value={text}
          />
          <TouchableOpacity
            className='ml-[9rem] w-[10rem]'
            onPress={handleSubmit}
          >
            <View className='flex-row items-center justify-center bg-orange-600/95 py-2 rounded-md'>
              <Ionicons name="add-circle-outline" size={20} color="white" />
              <Text className='text-white ml-1'>Add Student</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='flex-1 mt-2'>
  <FlatList
    data={people}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
    
      <TouchableOpacity 
      className='flex-row justify-between items-center bg-gray-100 my-1 border-2 border-dotted border-orange-700 rounded-md mx-5' 
    >

        <Text className='py-3 px-4'>{item.name}</Text>
        <MaterialIcons 
        name="delete" 
        size={22}
         color="#333"
           onPress={() => handlePress(item.id)}
          />
      </TouchableOpacity>
    )}
  />
</View>
      </View>
    </TouchableWithoutFeedback>
  );
}
