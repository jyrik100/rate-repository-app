//import Text from './Text';
import { Text, TextInput, Pressable, View } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';


const initialValues = {
  mass: '100',
  height: '1',
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

    console.log("asdasdasda")
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
      <FormikTextInput name="mass" placeholder="Weight (kg)" />      
      <FormikTextInput name="height" placeholder="Height (m)" />
      <FormikTextInput name="add" placeholder="Add (m)" />
      <Pressable onPress={onSubmit}>
        <Text>Calculate</Text>
      </Pressable>
    </View>
  );

}
export default SignIn;
