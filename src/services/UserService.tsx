import api from './api';

class UserService {
  getId(username: string) {
    return api.get(`/users/${username}`);
  }

  getUsersPosts() {
    return api.get(`/users`);
  }
}

export default new UserService();
