import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CustumerServiceClient as _CustumerServiceClient, CustumerServiceDefinition as _CustumerServiceDefinition } from './CustumerService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Custumer: MessageTypeDefinition
  CustumerList: MessageTypeDefinition
  CustumerRequestId: MessageTypeDefinition
  CustumerService: SubtypeConstructor<typeof grpc.Client, _CustumerServiceClient> & { service: _CustumerServiceDefinition }
  Empty: MessageTypeDefinition
}

