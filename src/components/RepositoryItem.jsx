import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

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
      color: 'blue',
    },
    bigText: {
      fontSize: 24,
      fontWeight: '700',
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



const Item = (props) => {
   
   return (
      <View style={styles1.container}>
      <FancyText >
      <Image source = {{uri:props.ownerAvatarUrl}} style = {{ width: 200, height: 200 }}/>
         </FancyText>
         
      <FancyText >
        Fullname: {props.fullName} 
     </FancyText>
     <FancyText >
        Rating: {props.rating} 
        </FancyText>
     <FancyText isBlue>
        Description: {props.description} 
        </FancyText>
     <FancyText isBig>
        Language: {props.language} 
        </FancyText>
     <FancyText >
        Stars: {props.stars} 
        </FancyText>
     <FancyText >
        Forks: {props.forks} 
        </FancyText>
     <FancyText >
        Reviews: {props.reviews} 
      </FancyText>
    </View>
    );
};
export default Item;



