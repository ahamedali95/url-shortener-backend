import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    longUrl: String,
    shortUrl: String
}, {
    versionKey: false,
    timestamps: true
});

export default urlSchema;