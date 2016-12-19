# name: static-pages
# about: Static pages plugin for Discourse
# version: 0.0.3
# authors: Nukomeet, Leo McArdle

enabled_site_setting :static_pages_enabled
add_admin_route 'static_pages.pages', 'pages'
register_asset 'stylesheets/static_pages.scss'

class PagesConstraint
  def matches?(request)
    normalized_path = request.path.sub(/^\//, '').sub(/\/$/, '')
    StaticPages::Page.where(path: normalized_path).exists?
  end
end

Discourse::Application.routes.append do
  get '/admin/plugins/pages' => 'admin/plugins#index', constraints: AdminConstraint.new
  get '/admin/plugins/pages/new' => 'admin/plugins#index', constraints: AdminConstraint.new
  get '/admin/plugins/pages/:id/edit' => 'admin/plugins#index', constraints: AdminConstraint.new
  get '*path' => 'static_pages/pages#route', constraints: PagesConstraint.new
end

load File.expand_path('../lib/pages.rb', __FILE__)
