import express from 'express';
import connection from '../config/database';

const healthCheckRouter = express.Router();

enum DB_STATE {
    DISCONNECTED,
    CONNECTED,
    CONNECTING,
    DISCONNECTING
}

healthCheckRouter.get('/health', async (req, res): Promise<void> => {
    const data = {
        applicationUptime: process.uptime(),
        dbState: DB_STATE[connection.readyState],
        message: 'Ok',
        date: new Date()
    };

    res.status(200).send(data);
});

export default healthCheckRouter;

