import authRepo from "../repository/Auth";

export default class Auth {
  async Login(LoginDTO) {
    return authRepo.Login(LoginDTO);
  }
}
