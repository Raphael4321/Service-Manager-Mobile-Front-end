import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ClienteRepo {
  async findClienteById(userId) {
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
      `${process.env.EXPO_PUBLIC_API_URL}/cliente/${userId}`,
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
      `${process.env.EXPO_PUBLIC_API_URL}/cliente`,
      options
    );

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }

  async createClient(clienteDTO) {
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
      body: JSON.stringify(clienteDTO),
    };

    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/cliente`,
      options
    );

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }

  async updateClient(clienteDTO, idCliente) {
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
      body: JSON.stringify(clienteDTO),
    };

    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/cliente/${idCliente}`,
      options
    );

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }
}
