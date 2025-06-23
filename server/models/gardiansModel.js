// guardiansInfoModel.js
import mongoose from 'mongoose';

const guardiansInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  nameofGuardian: { type: String, required: true },
  status: { type: String, required: true },
  relationshipWithGuardian: { type: String, required: true },
  guardianMonthlyIncome: { type: Number, required: true },
  guardianOccupation: { type: String, required: true },
  guardianCNIC: { type: String, required: true },
  guardianMobileNumber: { type: String, required: true },
  guardianEmailAddress: { type: String, required: true },
  dependentFamilyMembers: { type: Number, required: true },
},{timestamps:true});

const GuardiansInfo = mongoose.model('GuardiansInfo', guardiansInfoSchema);

export default GuardiansInfo;
