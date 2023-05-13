
module.exports = class PostHandler {
    constructor(PostService) {
        this.PostService = PostService;
    }

    async createPost(request, reply) {

        // validate
        const { title, content } = request.body;

        if (typeof title != 'string' || typeof content != 'string') {
            return 'worng format';
        }

        if (title.length > 1000) {
            return 'title should not greater than 1000 chars';
        }

        if (content.length > 5000) {
            return 'title should not greater than 1000 chars';
        }

        // business
        const result = await this.PostService.createPost(title, content);

        return reply.status(200).send({
            status: 'success',
            body: result
        });
    }

    async getAll(){

    }
};