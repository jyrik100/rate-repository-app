import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
//import { TouchableWithoutFeedback } from 'react-native-web';

const styles1 = StyleSheet.create({
   container: {
     backgroundColor: 'white',
   },
   // ...
 });
 
const styles = StyleSheet.create({
   separator: {
     height: 10,
   },
   text: {    
     color: 'black',    
     fontSize: 15,    
     fontWeight: '700'  
   },
   blueText: {
      color: 'grey',
    },
    bigText: {
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: '400',
      width: 150,
      hight: 250,
      color: 'white',
      backgroundColor: '#0366d6',
      borderRadius: 5,
      marginLeft:40,
      padding: 5
    
    },


 });

 const FancyText = ({ isBlue, isBig, children }) => {
   const textStyles = [
     styles.text,
     isBlue && styles.blueText,
     isBig && styles.bigText,
   ];
 
   return <Text style={textStyles}>{children}</Text>;
 };

const Tonnitus = (value) => {
  if(value >1000){
    value = value/1000
    return Number(value).toFixed(1) +'K' 

  } else return value
}





const Item = (props) => {
   
   return (
      <View style={styles1.container}>
      <FancyText isBlue> 
         <Image source = {{uri:props.ownerAvatarUrl}} style = {{ width: 150, height: 150, float:  'left' } } />
         <Text style = {{ float:  'left' } }>
         <ul>
         <div style= {{color: 'black'}}>{props.fullName}</div>
            <div>{props.description}</div>
        </ul>
        <FancyText isBig>
        {props.language} 
      </FancyText>
            
            
         </Text>
     </FancyText>
      <FancyText >
        Rating: {props.rating} 
        Stars: {Tonnitus(props.stars)}
        Forks: {Tonnitus(props.forks)} 
        Reviews: {props.reviews} 
      </FancyText>
    </View>
    );
};
export default Item;



