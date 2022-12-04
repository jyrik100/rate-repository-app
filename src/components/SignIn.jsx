//import Text from './Text';
import { Text, TextInput, Pressable, View } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';
import FancyText from './RepositoryItem';
import * as yup from 'yup';
import { gql, useQuery } from '@apollo/client';
import useSignIn from './useSignIn'


const initialValues = {
  mass: '',
  height: '',
  add:'2'
};

 
const SignIn = () => {
//  useSignIn()   Mihin tämä laitetaan että ei looppaa
    
  return (
  <BodyMassIndexCalculator>canl</BodyMassIndexCalculator>      
  )
  };
  



const getBodyMassIndex = (mass, height, add) => {
  return mass*height*add;
};


const validationSchema = yup.object().shape({  
  mass: yup    
  .number()    
  .min(2, 'username must have at least two digit')
  .required('username is required'), 
  height: yup    
  .number()    
  .min(0.5, 'password must be greater or equal to 0.5')    
  .required('password is required'),}
  );


const BodyMassIndexCalculator = () => {

  const [signIn] = useSignIn()

  

  const onSubmit = async (values) => {
    const mass = parseFloat(values.mass);
    const height = parseFloat(values.height);
    const add = parseFloat(values.add);
    
    if (!isNaN(mass) && !isNaN(height) && height !== 0) {
      console.log(`Your body mass index is: ${getBodyMassIndex(mass, height, add)}`);
    }
    console.log(mass,height)

    try {
      const { data } = await signIn();
      console.log("Signin Data")
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };


    console.log("Signin End") 
//    useSignIn()
//  };

    return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit} />}

    </Formik>
  );
};

const BodyMassIndexForm = ({ onSubmit }) => {
  const [massField, massMeta, massHelpers] = useField('mass');
  const [heightField, heightMeta, heightHelpers] = useField('height');
  const [addField, addMeta, addHelpers] = useField('add');
  

  return (
    <View>
      <FormikTextInput   name="mass" placeholder="Username"/>      
      <FormikTextInput name="height" placeholder="Password" />
      <Pressable  onPress={onSubmit}  style= { {      
      justifyContent: 'center',
      fontSize: 200,
      fontWeight: '400',
      font: 'yellow',
      width: 150,
      hight: 250,
      backgroundColor: '#0366d6',
      borderRadius: 4,
      padding: 5,
      textAlign: 'center',

      }}>
        <Text style= { {  color: 'white'  }}  >Sign in</Text>
      </Pressable>

    </View>
  );

}
export default SignIn;
