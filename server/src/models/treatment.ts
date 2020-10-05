import mongoose, { Schema, Document, Model } from 'mongoose';

const treatmentSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subtreatment: {
    type: Array,
    required: false,
  },
  cost:{
    type: Number,
    required: false 
  }
});

export interface ITreatment extends Document {
  name: string;
  subtreatment: Array<ITreatment>;
  cost: number;
}

const Treatment: Model<ITreatment> = mongoose.model('Treatment', treatmentSchema);
export default Treatment;
