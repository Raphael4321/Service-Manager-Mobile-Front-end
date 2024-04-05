import { clienteRepo } from "../repository";

export default class ClienteService {
  async findUserById(clienteId) {
    const gettingUserById = clienteRepo.findClienteById(clienteId);
    return gettingUserById;
  }

  async findAll() {
    return clienteRepo.findAll();
  }

  async createClient(clienteDTO) {
    return clienteRepo.createClient(clienteDTO);
  }

  async updateClient(clienteDTO, idCliente) {
    return clienteRepo.updateClient(clienteDTO, idCliente);
  }
}
