const pull = require('lodash/pull')

module.exports = global.document = {
  createElement (tag) {
    var children = []
  
    var attributes = {}
  
    var element = {
      get nodeName () {
        return tag
      },
  
      get children () {
        return children
      },
  
      get attributes () {
        return attributes
      },
  
      appendChild (child) {
        if (child) {
          child.remove()
          child.parentElement = element
          children.push(child)
          return child
        }
      },
  
      removeChild (child) {
        if (child) {
          pull(children, child)
          child.parentElement = null
          return child
        }
      },
  
      remove () {
        if (element.parentElement) {
          return element.parentElement.removeChild(element)
        }
      },
  
      toString () {
        return `
          <${tag}>
            ${children.join('\n')}
          </${tag}>
        `
      }
    }
  
    return element
  },

  createTextNode (text) {
     var element = {
      get innerText () {
        return text
      },
  
      set innerText (value) {
        return text = value
      },
  
      remove () {
        if (element.parentElement) {
          return element.parentElement.removeChild(element)
        }
      },
  
      toString () {
        return text
      }
    }
  
    return element
  }
}