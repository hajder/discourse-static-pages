export default function () {
  this.route('pages', function () {
    this.route('show', { path: '/:id' });
  })
}
