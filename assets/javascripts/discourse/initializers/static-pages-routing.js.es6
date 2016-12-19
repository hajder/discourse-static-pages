import { withPluginApi } from 'discourse/lib/plugin-api';
import { ajax } from 'discourse/lib/ajax';

export default {
  name: 'static-pages-routing',

  initialize: function () {

    withPluginApi('0.1', api => {
      const UnknownRoute = api.container.lookupFactory('route:unknown')
      UnknownRoute.reopen({

        model (params) {
          var normalized_path = params.path.replace(/^\//, '').replace(/\/$/, '')
          return ajax('/' + normalized_path).then(result => {
            if (result.page && result.page.path == normalized_path) {
              return result.page
            } else {
              return ajax("/404-body", { dataType: 'html' });
            }
          }).catch(() => {
            return ajax("/404-body", { dataType: 'html' });
          })
        },

        renderTemplate (controller, model) {
          if (model.path) {
            this.render('pages/show', { model: model })
          } else {
            this._super(controller, model)
          }
        }

      })
    })
  }
};
