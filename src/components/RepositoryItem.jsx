import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
   separator: {
     height: 10,
   },
   text: {    
     color: 'red',    
     fontSize: 15,    
     fontWeight: '700'  
   }

 });




const Item = (props) => {

    return (
      <View>
      <Text style={styles.text}>
        Fullname: {props.fullName} 
     </Text>
     <Text >
        Rating: {props.rating} 
        </Text>
     <Text >
        Description: {props.description} 
        </Text>
     <Text >
        Language: {props.language} 
        </Text>
     <Text >
        Stars: {props.stars} 
        </Text>
     <Text >
        Forks: {props.forks} 
        </Text>
     <Text >
        Reviews: {props.reviews} 
      </Text>
    </View>
    );
};
export default Item;



