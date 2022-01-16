export class User {

  public _username: string;
  public _password: string;
  public _role: string;

  constructor(username: string, password: string, role: string) {
    this._username = username;
    this._password = password;
    this._role = role;
  }


  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
