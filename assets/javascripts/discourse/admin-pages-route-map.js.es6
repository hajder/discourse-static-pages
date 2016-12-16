export default {
  resource: 'admin.adminPlugins',
  map() {
    this.route('pages', function () {
      this.route('new');
      this.route('edit', { path: ':id/edit' });
    });
  }
};
