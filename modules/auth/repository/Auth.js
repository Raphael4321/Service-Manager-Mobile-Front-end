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
      const data = await response.json();
      return { email: LoginDTO.email, token: data.token };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  }
}
