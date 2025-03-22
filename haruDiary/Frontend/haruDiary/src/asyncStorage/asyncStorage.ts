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

// 모드 읽기 라이트-다크-시스템 
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

// 폰트 저장
export const whatFontSet = async (value1:String, value2:String, value3:number) => {
  try {
    const value = {
      textName : value1,
      textFont : value2,
      selectedIndex : value3,
    }
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('whatFont', jsonValue);
    console.log(value)
  } catch (e) {
    // saving error
    console.log(e)
  }
};

// 폰트 읽기
export const whatFontGet = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('whatFont');
    if(jsonValue === null){
      whatFontSet('나눔명조', "NanumMyeongjo", 0)
      whatFontGet()
    }else{
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    // error reading value
    console.log(e)
  }
};

// 폰트 사이즈 저장
export const whatFSValueSet = async (value1:number) => {
  try {
    const value = {
      fsValue : value1,
    }
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('whatFSValue', jsonValue);
    console.log(value)
  } catch (e) {
    // saving error
    console.log(e)
  }
};

// 폰트 사이즈 읽기
export const whatFSValueGet = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('whatFSValue');
    if(jsonValue === null){
      whatFSValueSet(2)
      whatFSValueGet()
    }else{
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    // error reading value
    console.log(e)
  }
};

// 알림 시간 저장
export const whenAlarmTimeSet = async (value1:number) => {
  try {
    const value = {
      theDate : value1,
    }
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('whenAlarmTime', jsonValue);
    console.log(value)
  } catch (e) {
    // saving error
    console.log(e)
  }
};

// 알림 시간 읽기
export const whenAlarmTimeGet = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('whenAlarmTime');
    if(jsonValue === null){
      const now = new Date()
      whenAlarmTimeSet(now.getTime())
      whenAlarmTimeGet()
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