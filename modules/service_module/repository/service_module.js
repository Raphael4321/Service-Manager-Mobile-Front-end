import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ServiceModule {
  async createService(data) {
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
      body: JSON.stringify(data),
    };

    const response = await fetch(`http://localhost:3002/servicos`, options);

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }

  async getAllService() {
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

    const response = await fetch(`http://localhost:3002/servicos`, options);

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }

  async updateService(idServico, servicoDTO) {
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
      body: JSON.stringify(servicoDTO),
    };

    const response = await fetch(
      `http://localhost:3002/servicos/${idServico}`,
      options
    );

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }
}
