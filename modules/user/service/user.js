import { userRepo } from "../repository";

export default class UserService {
  async findUserById(userId) {
    const gettingUserById = userRepo.findUserById(userId);
    return gettingUserById;
  }
  async findAll() {
    return userRepo.findAll();
  }
  async createUser(userDTO) {
    return userRepo.createUser(userDTO);
  }
  async updateUser(id, userDTO) {
    return userRepo.updateUser(id, userDTO);
  }
}
