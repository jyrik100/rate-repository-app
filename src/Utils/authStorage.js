import AsyncStorage from '@react-native-async-storage/async-storage';
//import { keyboardProps } from 'react-native-web/dist/cjs/modules/forwardedProps';/*  */

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawAccessToken = await AsyncStorage.getItem(
        `${this.namespace}:accessToken`,
      );
  
      return rawAccessToken ? JSON.parse(rawAccessToken) : [];
  }
  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(accessToken,JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }


  /*   async setAccessToken(accessToken) {
    const currentAccessToken = await this.getAccessToken();
    const newAccessToken = [...currentAccessToken, accessToken];

    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(newAccessToken),
    );
  } */
    
  async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }  
}

export default AuthStorage;

// https://react-native-async-storage.github.io/async-storage/docs/usage/