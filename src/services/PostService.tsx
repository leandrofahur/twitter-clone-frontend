import api from './api';

class PostService {
  create(payload: {}, user_id: string) {
    return api.post(`/posts/${user_id}`, payload);
  }
  getAll() {
    return api.get(`/posts`);
  }
}

export default new PostService();
