import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from "../type/customers";
// const  fs = require("fs");
// let  ssl = grpc.credentials.createSsl(
//    fs.readFileSync(require('path').join(__dirname, '../../config/certificates/ca.crt')),    
//    fs.readFileSync(require('path').join(__dirname, '../../config/certificates/client.key')),
//    fs.readFileSync(require('path').join(__dirname, '../../config/certificates/client.crt'))
//  );
const host = '127.0.0.1:30043';
const PROTO_PATH = "./proto/customers.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const CustomerService = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const client = new CustomerService.CustumerService(
    host,
    grpc.credentials.createInsecure()
)

export { client }