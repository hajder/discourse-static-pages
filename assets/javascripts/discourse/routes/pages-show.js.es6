import Page from '../models/page';

export default Discourse.Route.extend({
  model(params) {
    return Page.findById(params.id).then((result) => {
      return result.page;
    });
  },

  redirect(model) {
    if (model.path) {
      this.replaceWith('unknown', model)
    }
  }
});
