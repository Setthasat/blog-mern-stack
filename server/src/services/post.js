module.exports = class Post {

    constructor(PostEntities) {
        this.PostEntities = PostEntities
    }

    async createPost(title, content) {

        const newPost = {
            title: title,
            content: content,
            timeStamp: new Date()
        };

        // database

    }

    getAllPosts() {
        console.log('hi');
    }

    getSinglePost() {

    }
}

