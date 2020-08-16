import mongoose, { Schema, Model, Document } from 'mongoose';

const doctorSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export interface IDoctor extends Document {
  name: string,
}

const Doctor: Model<IDoctor> = mongoose.model('Doctor', doctorSchema);

export default Doctor;
