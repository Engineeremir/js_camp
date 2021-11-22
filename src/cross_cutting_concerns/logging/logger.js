export class BaseLogger {
    log(data) {

        console.log(data)
    }
}

export class ElasticLogger extends BaseLogger {
    log(data) {
        console.log("Logged to elastic")
    }
}


export class MongoLogger extends BaseLogger {
    log(data) {
        console.log("Logged to mongo")
    }
}