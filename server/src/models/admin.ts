import mongoose, { Schema, Document, Model } from 'mongoose';

const adminSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export interface IAdmin extends Document {
  username: string,
  password: string,
}

const Admin: Model<IAdmin> = mongoose.model('Admin', adminSchema);

export default Admin;
