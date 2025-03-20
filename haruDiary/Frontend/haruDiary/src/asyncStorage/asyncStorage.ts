import AsyncStorage from '@react-native-async-storage/async-storage';

// 모드 저장 라이트-다크-시스템 
export const isLightSet = async (value1:String, value2:number) => {
  try {
    const value = {
      textName : value1,
      selectedIndex : value2,
    }
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('isLight', jsonValue);
    console.log(value)
  } catch (e) {
    // saving error
    console.log(e)
  }
};

// 모드 일기 라이트-다크-시스템 
export const isLightGet = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('isLight');
    if(jsonValue === null){
      isLightSet('라이트 모드', 0)
      isLightGet()
    }else{
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    // error reading value
    console.log(e)
  }
};

// 데이터 저장 String
// const storeData = async (value) => {
//   try {
//     await AsyncStorage.setItem('my-key', value);
//   } catch (e) {
//     // saving error
//   }
// };
// 데이터 저장 JSON
// const storeData = async (value) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem('my-key', jsonValue);
//   } catch (e) {
//     // saving error
//   }
// };

// 데이터 읽기 String
// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('my-key');
//     if (value !== null) {
//       // value previously stored
//     }
//   } catch (e) {
//     // error reading value
//   }
// };
// 데이터 읽기 JSON
// const getData = async () => {
//   try {
    // const jsonValue = await AsyncStorage.getItem('my-key');
    // return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     // error reading value
//   }
// };