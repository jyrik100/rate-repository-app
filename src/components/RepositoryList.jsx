import { FlatList, View, StyleSheet } from 'react-native';
import Item from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    text: {    
      color: 'blue',    
      fontSize: 15,    
      fontWeight: '700'  
    }

  });




  
 const repositories = [
    {
      id: 'jaredpalmer.formik',
      fullName: 'jaredpalmer/formik',
      description: 'Build forms in React, without the tears',
      language: 'TypeScript',
      forksCount: 1589,
      stargazersCount: 21553,
      ratingAverage: 88,
      reviewCount: 4,
      ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
      id: 'rails.rails',
      fullName: 'rails/rails',
      description: 'Ruby on Rails',
      language: 'Ruby',
      forksCount: 18349,
      stargazersCount: 45377,
      ratingAverage: 100,
      reviewCount: 2,
      ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
      id: 'django.django',
      fullName: 'django/django',
      description: 'The Web framework for perfectionists with deadlines.',
      language: 'Python',
      forksCount: 21015,
      stargazersCount: 48496,
      ratingAverage: 73,
      reviewCount: 5,
      ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
      id: 'reduxjs.redux',
      fullName: 'reduxjs/redux',
      description: 'Predictable state container for JavaScript apps',
      language: 'TypeScript',
      forksCount: 13902,
      stargazersCount: 52869,
      ratingAverage: 0,
      reviewCount: 0,
      ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
  ];

  const ItemSeparator = () => <View style={styles.separator} />;
//   const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//   ];
  
  const renderItem = ({ item }) => (
    <Item 
    fullName={item.fullName} 
    description ={item.description} 
    language ={item.language}    
    stars ={item.stargazersCount}    
    forks ={item.forksCount}    
    reviews ={item.reviewCount}
    rating =  {item.ratingAverage}
    />
  );
 

  const RepositoryList = () => {
    return (
      <FlatList  
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
//        renderItem={RepositoryItem}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    );
  };
  
  
  export default RepositoryList;

