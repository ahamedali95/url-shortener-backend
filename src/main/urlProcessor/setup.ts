import dotenv from 'dotenv';
import path from 'path';

const profilesDirectory = path.resolve('./src/main/resources/profiles');

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    process.env.BASE_URL = 'http://localhost:8080';
} else if (process.env.NODE_ENV === 'production') {
    process.env.BASE_URL = 'https://sholy.herokuapp.com';
}

process.env.NODE_CONFIG_DIR = profilesDirectory;
dotenv.config();