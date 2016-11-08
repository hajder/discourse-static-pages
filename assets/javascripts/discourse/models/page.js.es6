export default {
  findAll() {
    return ajax('/pages');
  },

  findById(id) {
    return ajax(`/pages/${id}`);
  }
};
