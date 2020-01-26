export interface ILogger {
    Log();
}

export class BaseLogger implements ILogger {
    Log() {
        console.log('base log');
    }
}

export class ConsoleLogger implements BaseLogger {
    Log() {
        console.log('logging from console logger');
    }
}

export class DbLogger implements BaseLogger {
    Log() {
        console.log('Logging from Db logger');
    }
}

export class FileLogger implements BaseLogger {
    Log() {
        console.log('Logging from file logger');
    }
}
