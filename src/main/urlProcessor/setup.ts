import dotenv from 'dotenv';
import path from 'path';

const profilesDirectory = path.resolve('./src/main/resources/profiles');

process.env.NODE_CONFIG_DIR = profilesDirectory;
dotenv.config();