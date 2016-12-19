import { ajax } from 'discourse/lib/ajax';

export default {
  findAll() {
    return ajax('/pages/admin/pages');
  },

  findById(id) {
    return ajax(`/pages/admin/pages/${id}`);
  },

  findGreatestId() {
    return ajax('/pages/admin/pages/greatestId')
  },

  create(model) {
    return ajax('/pages/admin/pages', {
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ page: model })
    });
  },

  update(model) {
    return ajax(`/pages/admin/pages/${model.id}`, {
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({ page: model })
    })
  },

  delete(model) {
    return ajax(`/pages/admin/pages/${model.id}`, {
      method: 'DELETE'
    });
  }
};
