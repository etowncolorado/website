module.exports = (key, fallback) => {
  if (key in process.env) {
    return process.env[key]
  }

  return fallback
}