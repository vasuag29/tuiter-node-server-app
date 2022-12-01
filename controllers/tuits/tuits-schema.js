import mongoose from 'mongoose';

const schema = mongoose.Schema({
                                   userName: String,
                                   handle: String,
                                   time: String,
                                   tuit: String,
                                   userImage: String,
                                   image: String,
                                   image_title: String,
                                   image_description: String,
                                   image_link: String,
                                   likes: Number,
                                   liked: Boolean,
                                   replies: String,
                                   retuits: String,
                                   dislikes: Number
                               }, {collection: 'tuits'});
export default schema;