import mongoose from 'mongoose';

mongoose.set('debug', true);
mongoose.connect(process.env.DB_CONNECT_URL as string);

const connection: mongoose.Connection = mongoose.connection;

export default connection;
