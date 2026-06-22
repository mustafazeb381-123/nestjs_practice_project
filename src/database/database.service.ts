import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;

    onModuleInit() {
        this.isConnected = true;
        console.log('Database connected successfully');
    }

    onApplicationShutdown(signal: string) {
        this.isConnected = false;
        console.log(`Database disconnected successfully due to app shutdown. Signal ${signal}`);
    }

    getStatus() {
        return this.isConnected ? 'Connected' : 'Disconnected';
    }


}
