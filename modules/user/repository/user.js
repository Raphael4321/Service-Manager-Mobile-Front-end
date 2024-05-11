import AsyncStorage from "@react-native-async-storage/async-storage";

export default class UserRepo {
  async findUserById(userId) {
    const token = await AsyncStorage.getItem("token");

    if (!token) return;

    const header = new Headers({
      "Content-Type": "application/json",
      authorization: token,
    });

    const options = {
      method: "GET",
      headers: header,
      mode: "cors",
    };

    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/funcionario/${userId}`,
      options
    );

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }

  async findAll() {
    const token = await AsyncStorage.getItem("token");

    if (!token) return;

    const header = new Headers({
      "Content-Type": "application/json",
      authorization: token,
    });

    const options = {
      method: "GET",
      headers: header,
      mode: "cors",
    };

    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/funcionario`,
      options
    );

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }

  async createUser(userDTO) {
    const token = await AsyncStorage.getItem("token");

    if (!token) return;

    const header = new Headers({
      "Content-Type": "application/json",
      authorization: token,
    });

    const options = {
      method: "POST",
      headers: header,
      mode: "cors",
    };

    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/funcionario`,
      options
    );

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }

  async updateUser(id, userDTO) {
    const token = await AsyncStorage.getItem("token");

    if (!token) return;

    const header = new Headers({
      "Content-Type": "application/json",
      authorization: token,
    });

    const options = {
      method: "PUT",
      headers: header,
      mode: "cors",
      body: JSON.stringify(userDTO),
    };

    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/funcionario/${id}`,
      options
    );

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }
}
