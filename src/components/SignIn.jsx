//import Text from './Text';
import { Text, TextInput, Pressable, View } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';


const initialValues = {
  mass: '',
  height: '',
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
      <FormikTextInput name="mass" placeholder="UserName" />      
      <FormikTextInput name="height" placeholder="Password" />
      <Pressable onPress={onSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );

}
export default SignIn;
