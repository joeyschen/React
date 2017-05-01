
var marked = require('marked'),
React = require('react'),
ReactDOM = require('react-dom')

module.exports = {
  linkProfiles: linkProfiles,
  teaserProcessed: teaserProcessed,
  processBody: processBody,
  teaser: teaser
}

/*
 * Convert to markdown, link @mentions to their user profiles.
 */
function processBody(text) {
  return React.DOM.span({
    dangerouslySetInnerHTML: {
      __html: linkProfiles(marked(text, {gfm: true}))
    }
  })
}

function linkProfiles(text) {
  var rep = '$1<a href="https://github.com/$2">@$2</a>'
  return text.replace(/(^|\s|>)@([a-zA-Z_-]{2,})/g, rep)
}

function teaserProcessed(text, maxlen) {
  return processBody(teaser(text, maxlen))
}

/**
 * Get a teaser, of max length maxlen (default 140) characters.
 */
function teaser(text, maxlen) {
  var end = 0
    , white = /\s/
    , match = text.slice(end).match(white)
    , next
  maxlen = maxlen || 140
  if (text.length <= maxlen) return text
  if (!match) {
    return text.slice(0, maxlen) // give up
  }
  next = {start: match.index, end: match.index + match[0].length}
  while (end + next.start < maxlen) {
    end += next.end;
    match = text.slice(end).match(white)
    if (!match) {
      next = {start: text.length - end, end: text.length - end}
    } else {
      next = {start: match.index, end: match.index + match[0].length}
    }
  }
  // TODO: return fixTrailingMarkdown(text.slice(0, end).trim())
  return text.slice(0, end).trim() + '…'
}
