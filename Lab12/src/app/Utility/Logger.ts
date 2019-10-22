export interface ILogger {
    Log();
}

export class BaseLogger implements ILogger {
    Log() {

    }
}

export class ConsoleLogger extends BaseLogger {
    Log() {
        console.log("consoler logger");
    }
}

export class DbLogger extends BaseLogger {
    Log() {
        console.log("DB logger logic");
    }
}

export class EmailLogger extends BaseLogger {
    Log() {
        console.log("Email logger logic");
    }
}