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
  gender: String,
  pastDentalHistory: String,
  chiefComplaint: String,
  provisionalDignosis: String,
  provisionalTreatmentPlan: String,
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
  occupation: String;
  gender: String,
  pastDentalHistory: String,
  chiefComplaint: String,
  provisionalDignosis: String,
  provisionalTreatmentPlan: String,
  treatmentLogs: ITreatmentLog[];
}

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
