import mongoose, { Schema, Document } from 'mongoose';
import { ITreatment } from './treatment';
import { IDoctor } from './doctor';

const patientSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: Date,
  address: String,
  mobileNo: Number,
  refBy: String,
  occupation: String,
  balance: Number,
  treatmentLogs: [{
    treatmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Treatment',
    },
    price: Number,
    date: {
      type: Date,
      default: Date.now,
    },
    teeth: String,
    doctor: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
  }],
});

export interface ITreatmentLog extends Document {
  treatmentId: ITreatment['_id'];
  price: number;
  date: string;
  teeth: string;
  doctor: IDoctor['name'];
}

export interface IPatient extends Document {
  name: string;
  dateOfBirth: string;
  address: string;
  mobileNo: number;
  refBy: string;
  balance: number;
  treatmentLogs: ITreatmentLog[];
}

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
