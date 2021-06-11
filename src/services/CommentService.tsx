import api from './api';

class CommentService {
  create(payload: {}, post_id: string) {
    return api.post(`/comments/${post_id}`, payload);
  }
}

export default new CommentService();
