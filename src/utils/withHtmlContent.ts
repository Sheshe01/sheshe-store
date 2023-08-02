import sanitizeHtml from 'sanitize-html'

interface SanitizeProps {
  dangerouslySetInnerHTML?: {
    __html: string
  }
}

const withHtmlContent = (content: string): SanitizeProps => {
  const sanitizeOption = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'iframe',
      'img',
      'jodit'
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['*'],
      iframe: ['src']
    }
  }
  return content
    ? {
        dangerouslySetInnerHTML: {
          __html: sanitizeHtml(content, sanitizeOption)
        }
      }
    : {}
}

export default withHtmlContent
