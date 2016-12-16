module StaticPages
  class Page < ActiveRecord::Base

    def compile_stylesheet(scss)
      DiscourseSassCompiler.compile("@import \"theme_variables\";\n" << scss, 'custom')
    rescue => e
      puts e.backtrace.join("\n") unless Sass::SyntaxError === e
      raise e
    end

    before_save do
      self.stylesheet_baked = compile_stylesheet(self.stylesheet) if self.stylesheet
    end

  end
end
