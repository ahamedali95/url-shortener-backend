import mongoose from 'mongoose';

export interface IUrl extends mongoose.Document {
    _id: string,
    longUrl: string,
    shortUrl: string,
}