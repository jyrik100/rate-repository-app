import { Text, TextInput, Pressable, View } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useSignIn from './useSignIn'

const initialValues = {
  username: 11,
  password: 33,
};
 
const SignIn = () => {return (<SignInView></SignInView>)}; // return SignInView

const validationSchema = yup.object().shape({   // data valdation
  username: yup    
  .number()    
  .min(2, 'username must have at least two digit')
  .required('username is required'), 
  password: yup    
  .number()    
  .min(0.5, 'password must be greater or equal to 0.5')    
  .required('password is required'),}
  );


const SignInView = () => {  // define SignInView Formik
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const username = parseFloat(values.username);
    const password = parseFloat(values.password);
     console.log("onSubmit"+ username)
     console.log("onSubmit"+ password)

    try {
      const { data } = await signIn({ username, password })
      console.log("SignIn result")
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
    return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <EnterUsernamePasswordForm onSubmit={handleSubmit} />}

    </Formik>
  );
};

const EnterUsernamePasswordForm = ({ onSubmit }) => {
//  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
//  const [passwordField, passwordMeta, passwordHelpers] = useField('password');
  
  return (
    <View>
      <FormikTextInput   name="username" placeholder="Username"/>      
      <FormikTextInput name="password" placeholder="Password" />
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
