import React from 'react'
import { Text, View, TextInput,Button,Keyboard,TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
type ReviewFormProps = {
  addReview: (review: { title: string; body: string; rating: string }) => void;
}

const reviewSchema=yup.object({
    title:yup.string().required().min(5),
    body:yup.string().required().min(12),
    rating:yup.string().required()
    .test('is_num_1-5','Rating must be a number from 1-5',(val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})

const ReviewForm = ({ addReview }: ReviewFormProps) => {
  return (
   <View>
<Formik
initialValues={{title:'',body:'',rating:''}}
validationSchema={reviewSchema}
onSubmit={(values,actions)=>{
    actions.resetForm();
    addReview(values)
}}
>
{({ handleChange, handleBlur, handleSubmit, values, errors, touched })=>(
    <View className='flex gap-3 border  mx-5 rounded-md border-gray-300 p-5'>
        <TextInput
        value={values.title}
        placeholder='enter title'
        onChangeText={handleChange('title')}
        onBlur={handleBlur('title')}
        className='border rounded-md p-3 border-gray-500'
        />

        {touched.title && errors.title && (
            <Text className='text-sm text-red-500'>{errors.title}</Text>
        )}

        <TextInput
        multiline
        value={values.body}
        placeholder='enter review'
        onChangeText={handleChange('body')}
        onBlur={handleBlur('body')}
        className=' border rounded-md p-3 border-gray-500'
        />

{touched.body && errors.body && (
            <Text className='text-sm text-red-500'>{errors.body}</Text>
        )}

<TextInput
    value={values.rating}
    placeholder='rating (1-5)'
    onChangeText={handleChange('rating')}
    keyboardType='numeric'
    onBlur={handleBlur('rating')}
    className='border rounded-md p-3 border-gray-500'
    />
    
    {touched.rating && errors.rating && (
            <Text className='text-sm text-red-500'>{errors.rating}</Text>
        )}

 
<TouchableOpacity  onPress={() => handleSubmit()}>
<View className='bg-[#f01d71] rounded-md text-centerpy-2   py-2'>
    <Text className='text-white text-center text-lg'>Submit</Text>
</View>
</TouchableOpacity>

    </View>
)}
</Formik>
   </View>
  )
}

export default ReviewForm
