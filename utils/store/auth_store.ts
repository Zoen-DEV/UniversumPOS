import * as SecureStore from 'expo-secure-store';

export const saveSecureData = async () => {
  await SecureStore.setItemAsync('token', 'user_secure_token');
};

export const getSecureData = async () => {
  const token = await SecureStore.getItemAsync('token');
  console.log('Token recuperado:', token);
  return !token ? false : true;
};

export const removeSecureData = async () => {
  await SecureStore.deleteItemAsync('token');
};