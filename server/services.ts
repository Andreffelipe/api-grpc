import * as grpc from '@grpc/grpc-js';
import { v4 as uuidv4 } from 'uuid';

import { Custumer, } from "../type/Custumer";
import { CustumerList } from "../type/CustumerList";
import { CustumerRequestId } from "../type/CustumerRequestId";
import { Empty } from "../type/Empty";

import { logger } from "../utils/logger";
import { custumers } from './db';

const service = {
  getAll: (
    _call: grpc.ServerUnaryCall<Empty, Empty>,
    callback: grpc.sendUnaryData<CustumerList>
  ) => {
    logger.info({
      level: 'info',
      message: JSON.stringify(custumers)
    });
    callback(null, { custumers });
  },

  get: (
    call: grpc.ServerUnaryCall<CustumerRequestId, Custumer>,
    callback: grpc.sendUnaryData<Custumer>
  ) => {
    let customer = custumers.find(n => n.id == call.request.id);
    console.log(call.request)
    logger.info({
      level: 'info',
      message: customer
    });
    if (customer) {
      callback(null, customer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      });
    }
  },

  insert: (
    call: grpc.ServerUnaryCall<Custumer, Custumer>,
    callback: grpc.sendUnaryData<Custumer>
  ) => {
    let customer = call.request;

    customer.id = uuidv4() as string;

    logger.info({
      level: 'info',
      message: JSON.stringify(customer)
    });
    custumers.push(customer);
    callback(null, customer);
  },

  update: (
    call: grpc.ServerUnaryCall<Custumer, Custumer>,
    callback: grpc.sendUnaryData<Custumer>
  ) => {
    let existingCustomer = custumers.find(n => n.id == call.request.id);

    if (existingCustomer) {
      existingCustomer.name = call.request.name as string;
      existingCustomer.age = call.request.age as number;
      existingCustomer.address = call.request.address as string;
      logger.info({
        level: 'info',
        message: JSON.stringify(existingCustomer)
      });
      callback(null, existingCustomer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      });
    }
  },

  remove: (
    call: grpc.ServerUnaryCall<CustumerRequestId, Empty>,
    callback: grpc.sendUnaryData<Empty>
  ) => {
    let existingCustomerIndex = custumers.findIndex(
      n => n.id == call.request.id
    );
    logger.info({
      level: 'info',
      message: JSON.stringify(existingCustomerIndex)
    });
    if (existingCustomerIndex != -1) {
      custumers.splice(existingCustomerIndex, 1);
      callback(null, {});
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      });
    }
  }
};

export { service }