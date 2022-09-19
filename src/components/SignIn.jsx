//import Text from './Text';
import { Text, TextInput, Pressable, View } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';
import FancyText from './RepositoryItem';



const initialValues = {
  mass: '',
  height: '',
  add:'2'
};


const SignIn = () => {
    
  return (
  <BodyMassIndexCalculator>canl</BodyMassIndexCalculator>      
  )
  };
  



const getBodyMassIndex = (mass, height, add) => {
  return mass*height*add;
};


const BodyMassIndexCalculator = () => {
  const onSubmit = values => {
    const mass = parseFloat(values.mass);
    const height = parseFloat(values.height);
    const add = parseFloat(values.add);

    if (!isNaN(mass) && !isNaN(height) && height !== 0) {
      console.log(`Your body mass index is: ${getBodyMassIndex(mass, height, add)}`);
    }
    console.log(mass,height)
  };

    return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
