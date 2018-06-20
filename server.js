// Require the framework and instantiate it 
const fastify = require('fastify')({
  logger: true
});

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' });
});

// Run the server
fastify.listen(3000, function (error, address) {
  if (error) {
    fastify.log.error(error);
    process.exit(1);
  }
  fastify.log.info(`Server listening on ${ address }`);
});