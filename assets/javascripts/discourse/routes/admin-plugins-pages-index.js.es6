import Page from '../../admin/models/page';

export default Discourse.Route.extend({
  model() {
    return Page.findAll().then((result) => {
      return result.pages;
    });
  }
});
