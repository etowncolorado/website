process.env.ENV = process.env.GCLOUD_PROJECT.split('-').pop()

exports.serve = require('./triggers/serve')