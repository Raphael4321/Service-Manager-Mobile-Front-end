import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Auth {
  static async Login(LoginDTO) {

    const header = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method: "POST",
      headers: header,
      mode: "cors",
      body: JSON.stringify(LoginDTO),
    };

    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/login`,
      options
    );

    if (response.ok) {
      const json = await response.json();
      await AsyncStorage.setItem('token', json.token);
      return json;
    } else {
      return undefined;
    }
  }
}
