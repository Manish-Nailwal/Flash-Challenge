import mongoose from "mongoose"

const Schema = mongoose.Schema;

const questSchema = new Schema({
    name: {type: String, required: true},
    target: {type: Number, required: true},
    reward:  {type: Number, required: true},
    progressCalculation: {
        type: Schema.Types.Mixed,
        required: true,
      }
})

export default mongoose.model("Quest", questSchema);