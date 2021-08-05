import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from "../type/customers";
import { service } from './services';

// const  fs = require("fs");
// let  ssl = grpc.credentials.createSsl(
//    fs.readFileSync(require('path').join(__dirname, '../../config/certificates/ca.crt')),    
//    fs.readFileSync(require('path').join(__dirname, '../../config/certificates/client.key')),
//    fs.readFileSync(require('path').join(__dirname, '../../config/certificates/client.crt'))
//  );

const host = '127.0.0.1:30043';

const PROTO_PATH = "./proto/customers.proto";

export function getServer (): grpc.Server {
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        arrays: true
    });
    const customersProto = grpc.loadPackageDefinition(
        packageDefinition
    ) as unknown as ProtoGrpcType;
    const server = new grpc.Server();
    server.addService(customersProto.CustumerService.service, service);
    return server;
}

if (require.main === module) {
    const server = getServer();
    server.bindAsync(
        host,
        grpc.ServerCredentials.createInsecure(),
        (err: Error | null, port: number) => {
            if (err) {
                console.error(`Server error: ${err.message}`);
            } else {
                console.log(`Server running at http://127.0.0.1:${port}`);
                server.start();
            }
        }
    );
}