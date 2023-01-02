import { Request, Response } from "express";
import UserService from "../service/userService";

export default class UserController {
  constructor(private userService = new UserService()) {}
  public getAll = async (req: Request, res: Response): Promise <Response> => {
    const users = await this.userService.getUsers();
    return res.status(200).json(users);
  };
}