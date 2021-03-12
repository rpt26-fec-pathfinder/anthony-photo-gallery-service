const mongoose = require('mongoose');
const { Schema } = mongoose;
const dotenv = require('dotenv');

dotenv.config({ path: 'config/config.env' });


// mongoose connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log('Mongo Connected!'))
  .catch(() => console.error('Error, Mongo is NOT Connected!!'));


// schema/model for mongo.
const imagesSchema = new Schema({
  page: String,
  headerImage: String,
  mainImages: [{ main: String, thumb: String }],
  moreLikeThisImages: [Array],
});

module.exports = mongoose.model('images', imagesSchema);