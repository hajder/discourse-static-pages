import Page from '../../admin/models/page';

export default Discourse.Route.extend({
  actions: {
    create() {
      const { title, body, stylesheet, path } = this.controller.model;

      Page.create({ title, body, stylesheet, path })
        .then(() => {
          this.transitionTo('adminPlugins.pages.index');
        })
        .catch(() => {
          alert('Error creating page.');
        });
    },

    cancel() {
      this.transitionTo('adminPlugins.pages.index');
    }
  },

  model() {
    return {};
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    Page.findGreatestId().then(result => {
      controller.set('pathPlaceholder', `/pages/${result.id + 1}`)
    })
  }
});
