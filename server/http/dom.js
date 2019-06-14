exports.createElement = (tag) => {
  var children = []
  var attributes = {}

  var element = {
    get nodeName() {
      return tag
    },

    get children() {
      return children
    },

    get attributes() {
      return attributes
    },

    get innerText() {
      return text
    },

    set innerText(value) {
      children = [
        exports.createTextNode(value)
      ]
      return this.innerText
    },

    appendChild(child) {
      if (child) {
        child.remove()
        child.parentElement = element
        children.push(child)
        return child
      }
    },

    removeChild(child) {
      if (child) {
        child.parentElement = null
        children = children.filter(
          (value) => child !== value
        )
        return child
      }
    },

    remove() {
      if (element.parentElement) {
        return element.parentElement.removeChild(element)
      }
    },

    setAttribute(key, value) {
      attributes[key] = value
    },

    getAttribute(key) {
      return attributes[key]
    },

    toString() {
      return `
        <${tag}>
          ${children.join('\n')}
        </${tag}>
      `
    }
  }

  return element
}

exports.createTextNode = (text) => {
  var element = {
    get innerText() {
      return text
    },

    set innerText(value) {
      return text = value
    },

    remove() {
      if (element.parentElement) {
        return element.parentElement.removeChild(element)
      }
    },

    toString() {
      return text
    }
  }

  return element
}