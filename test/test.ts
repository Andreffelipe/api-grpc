import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import assert from 'assert';
import * as http2 from 'http2';
import { custumers } from '../server/db';
import { getServer } from '../server/server';
import { ProtoGrpcType } from '../type/customers';


const server = getServer();
const creds = grpc.ServerCredentials.createInsecure();
const host = '127.0.0.1:30043';
const PROTO_PATH = "./proto/customers.proto";

function client () {
  const packageDefinition = protoLoader.loadSync(PROTO_PATH)
  const CustomerService = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
  const client = new CustomerService.CustumerService(
    host,
    grpc.credentials.createInsecure()
  )
  return client
}


describe('Server', () => {

  it('Retorno dos usuários via chamada http', done => {
    server.bindAsync(host, creds, (err, port) => {
      expect(err).toBeNull()
      console.log(port)

      const http = http2.connect(`http://127.0.0.1:${port}`);
      let data = '';
      function makeRequest (headers: http2.IncomingHttpHeaders) {
        const req = http.request(headers);
        req.setEncoding('utf8');
        let statusCode: string;

        req.on('response', headers => {
          statusCode = headers[http2.constants.HTTP2_HEADER_STATUS] as string;
          assert.strictEqual(
            statusCode,
            http2.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
          );
        });

        req.on('data', (chunk) => { data += chunk; });

        req.on('end', () => {
          http.close();
          server.tryShutdown(done);
        });

        req.end();
      }

      server.start();
      makeRequest({ ':path': '/' });

      expect(custumers).toEqual(data)
    });
  });
});