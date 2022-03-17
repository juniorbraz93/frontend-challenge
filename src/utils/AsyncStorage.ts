import AsyncStorage from '@react-native-async-storage/async-storage';
export function storageSetItem(key: string, data: any) {
  try {
    return AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return null;
  }
}

export async function storageGetItem(key: string) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

export function storageRemoveItem(key: string) {
  try {
    return AsyncStorage.removeItem(key);
  } catch (error) {
    return null;
  }
}

export function storageClear() {
  try {
    return AsyncStorage.clear();
  } catch (error) {
    return null;
  }
}

export async function storageGetAll() {
  try {
    let storageKeys: any = [];
    storageKeys = await AsyncStorage.getAllKeys();
    return storageKeys;
  } catch (error) {
    return null;
  }
}

export async function getAllKeys() {
  let keys: any = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    // read key error
  }

  // console.log(keys);
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
}

export async function getMultiple(keys: string[]) {
  let values;
  try {
    // if (Array.isArray(keys) && keys.length > 0) {
    values = await AsyncStorage.multiGet(keys);
    // console.log(values);

    return values;
    // }
    // return [];
  } catch (e) {
    return [];
  }
  // example console.log output:
  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
}
