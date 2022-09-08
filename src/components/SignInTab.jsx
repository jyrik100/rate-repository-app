import { Pressable, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    color: "white",
    fontSize:40,
    paddingBottom: 10,
    fontStyle: 'arial'
    
  },
  // ...
});

const SignInTab = () => {
  return <View style={styles.container}>
    <Pressable>SignIn</Pressable>

  </View>;
};

export default SignInTab;