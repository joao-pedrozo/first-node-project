import 'reflect-metadata';
import 'core-js';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import uploadConfig from '@config/upload';

import '@shared/infra/typeorm';
import AppError from '@shared/errors/AppError';
import cors from 'cors';
import routes from './routes';
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

app.listen(3333, () => {
    console.log('🚀 Propulsores ligados');
});
