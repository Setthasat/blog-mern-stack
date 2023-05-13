const fastify = require('fastify')({ logger: true });


const PostService = require('./services/post');
const PostHandler = require('./handlers/post');

// const PostEntitiesInstance = new PostEntity(mongodb);
const PostEntitiesInstance2 = new PostEntity(mysql);
const PostServiceInstance = new PostService(PostEntitiesInstance2);
const PostHandlerInstance = new PostHandler(PostServiceInstance);


require('dotenv').config();

// Declare a route
fastify.post('/register', async (request, reply) => {

    // validate 

    const { username, name, password } = request.body;
    const errorMsg = registerValidate(username, name, password);
    if (errorMsg) {
        return reply.code(400).send({
            error: errorMsg
        });
    }

    // bussiness
    const wallet = 0;

    const newUser = {
        username: username,
        name: name,
        password: password,
        wallet: wallet + 200
    };

    // db

});

fastify.post('/create/post', PostHandlerInstance.createPost(request, reply));
fastify.get('/getall', PostHandlerInstance.getAll(request, reply));


// fastify.get('/posts', Post.getAllPosts());

// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 8080 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();