import { withPluginApi } from 'discourse/lib/plugin-api';
import Page from '../../discourse/models/page';

export default {
  name: 'static-pages-menu',

  initialize: function() {

    withPluginApi('0.1', api => {
      Page.findAll().then(result => {
          result.pages.forEach(page => {
            api.decorateWidget('hamburger-menu:generalLinks', () => (
              { href: '/pages/'+page.id, rawLabel: page.title }
            ))
          })
        })
    })
  }
};
