import React from 'react';
import {View, Text} from 'react-native';

const Item = (props) => {

    return (
      <View>
      <Text >
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



