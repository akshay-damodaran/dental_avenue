import mongoose, { Schema, Document, Model } from 'mongoose';

const treatmentSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subtreatment: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

export interface ITreatment extends Document {
  name: string;
  subtreatment: string;
  type: string;
  price: number;
}

const Treatment: Model<ITreatment> = mongoose.model('Treatment', treatmentSchema);
export default Treatment;
