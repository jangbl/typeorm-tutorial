import { getRepository } from 'typeorm';
import { User } from '../entity/User';

class UserService {
  async register(firstName: string, email: string) {
    // TODO: check if email already exists
    // and if yes return a meaningful error
    // it would make sense to add a general error
    // handling middleware to the server
    // I omitted this to not make the tutorial too complex

    const userRepo = getRepository(User);
    const user = new User();
    user.firstName = firstName;
    user.email = email;
    return userRepo.save(user);
  }
}

export default new UserService();
