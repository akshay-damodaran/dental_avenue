import mongoose from 'mongoose';
import app from './app';
import { api, mongo } from './conf/development.json';

const API_SERVER_PORT = api.port;

const DB_URI = `mongodb://${mongo.host}:${mongo.port}/${mongo.db}`;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to mongo');
  app.listen(API_SERVER_PORT, () => {
    console.log('Server started on port', API_SERVER_PORT);
  });
});
