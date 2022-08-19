import React from 'react';
import {View, Text} from 'react-native';

const Item = (props) => {

    return (
      <View>
      <Text >this is fullname: {props.fullName} this isss id: {props.id}</Text>
    </View>
    );
};
export default Item;



