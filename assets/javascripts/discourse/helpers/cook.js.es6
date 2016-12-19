import { default as PrettyText } from 'pretty-text/pretty-text';
import { emojiUnescape } from 'discourse/lib/text';

export default Ember.Helper.helper(function ([body]) {
  return new Handlebars.SafeString(
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
      ).cook(body)
    )
  );
})
