/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
// const client = new Client("mango", "mango@gmail.com");

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get clientDate() {
    return { login: this.#login, email: this.#email };
  }

  set clientDate({ newLogin, newEmail }) {
    this.#login = newLogin;
    this.#email = newEmail;
  }
}

const client = new Client("mango", "mango@gmail.com");
console.log(client);
console.log(client.clientDate);
console.log(
  (client.clientDate = { newLogin: "Lola", newEmail: "lola@gmail.com" })
);
