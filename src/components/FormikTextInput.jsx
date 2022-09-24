import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    fontSize: 15,
    color: 'red'

  }

  , text : {
   color: 'black',
   backgroundColor: 'white', 
   width: 150,
   hight: 250,
   borderRadius: 4,
   textAlign: 'left',
   borderWidth: 1,
   borderColor: "gray"



  }
  
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;


  return (
    <>
      <TextInput style={styles.text}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;