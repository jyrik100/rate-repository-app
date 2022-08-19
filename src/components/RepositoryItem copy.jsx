import React from 'react';
import {View, Text} from 'react-native';

const RepositoryItem = (props) => {

    return (
       <View>
        <Text>{props.fullname}</Text>
      </View>
    );
};
export default RepositoryItem;


