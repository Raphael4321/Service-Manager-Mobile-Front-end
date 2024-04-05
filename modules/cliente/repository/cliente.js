export default class ClienteRepo {
  async findClienteById(userId) {
    const token = sessionStorage.getItem("token");

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
      `http://localhost:3002/cliente/${userId}`,
      options
    );

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }

  async findAll() {
    const token = sessionStorage.getItem("token");

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

    const response = await fetch("http://localhost:3002/cliente", options);

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }

  async createClient(clienteDTO) {
    const token = sessionStorage.getItem("token");

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

    const response = await fetch("http://localhost:3002/cliente", options);

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }

  async updateClient(clienteDTO, idCliente) {
    const token = sessionStorage.getItem("token");

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
      `http://localhost:3002/cliente/${idCliente}`,
      options
    );

    if (response.ok) {
      return await response.json();
    } else {
      return undefined;
    }
  }
}
