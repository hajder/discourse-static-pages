import { ajax } from 'discourse/lib/ajax';

export default {
  findAll() {
    return ajax('/pages');
  },

  findById(id) {
    return ajax(`/pages/${id}`);
  }
};
