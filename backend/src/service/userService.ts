import User from "../database/models/user.model";

class UserService {
  public model = User;
  public async getUsers(): Promise<User[]> {
    const users = await this.model.findAll() as User[];
    return users;
  }
}

export default UserService;
