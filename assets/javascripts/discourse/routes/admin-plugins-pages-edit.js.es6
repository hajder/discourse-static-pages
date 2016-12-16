import Page from '../../admin/models/page';

export default Discourse.Route.extend({
  actions: {
    update() {
      const { id, title, body, stylesheet } = this.controller.model;

      Page.update({ id, title, body, stylesheet })
        .then(() => {
          this.transitionTo('adminPlugins.pages.index');
        })
        .catch(() => {
          alert('Error updating page.');
        });
    },

    cancel() {
      this.transitionTo('adminPlugins.pages.index');
    }
  },

  model(params) {
    return Page.findById(params.id).then((result) => {
      return result.page;
    });
  }
});
