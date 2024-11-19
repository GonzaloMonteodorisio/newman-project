const newman = require('newman')

newman.run({
  collection: require('./Pokemon.postman_collection.json'),
  reporters: 'cli'
}, function (err) {
  if (err) {
    throw err
  }
  console.info('Se completó correctamente la ejecución de la colección')
})