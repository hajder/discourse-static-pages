import Page from '../models/page';
import { default as PrettyText } from 'pretty-text/pretty-text';
import { emojiUnescape } from 'discourse/lib/text';

export default Discourse.Route.extend({
  model(params) {
    return Page.findById(params.id).then((result) => {
      return result.page;
    });
  },

  setupController(controller, model) {
    model.body = new Handlebars.SafeString(
      emojiUnescape(
        new PrettyText(
          {
            sanitize: false,
            features: {
              'bold-italics': true,
              'auto-link': true,
              'newline': true
            }
          }
        ).cook(model.body)
      )
    );
    controller.setProperties({ model });
  }
});
