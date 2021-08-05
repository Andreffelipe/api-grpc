// Original file: customers.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Custumer as _Custumer, Custumer__Output as _Custumer__Output } from './Custumer';
import type { CustumerList as _CustumerList, CustumerList__Output as _CustumerList__Output } from './CustumerList';
import type { CustumerRequestId as _CustumerRequestId, CustumerRequestId__Output as _CustumerRequestId__Output } from './CustumerRequestId';
import type { Empty as _Empty, Empty__Output as _Empty__Output } from './Empty';

export interface CustumerServiceClient extends grpc.Client {
  Get(argument: _CustumerRequestId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  Get(argument: _CustumerRequestId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  Get(argument: _CustumerRequestId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  Get(argument: _CustumerRequestId, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  get(argument: _CustumerRequestId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  get(argument: _CustumerRequestId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  get(argument: _CustumerRequestId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  get(argument: _CustumerRequestId, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  
  GetAll(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _CustumerList__Output) => void): grpc.ClientUnaryCall;
  GetAll(argument: _Empty, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _CustumerList__Output) => void): grpc.ClientUnaryCall;
  GetAll(argument: _Empty, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _CustumerList__Output) => void): grpc.ClientUnaryCall;
  GetAll(argument: _Empty, callback: (error?: grpc.ServiceError, result?: _CustumerList__Output) => void): grpc.ClientUnaryCall;
  getAll(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _CustumerList__Output) => void): grpc.ClientUnaryCall;
  getAll(argument: _Empty, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _CustumerList__Output) => void): grpc.ClientUnaryCall;
  getAll(argument: _Empty, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _CustumerList__Output) => void): grpc.ClientUnaryCall;
  getAll(argument: _Empty, callback: (error?: grpc.ServiceError, result?: _CustumerList__Output) => void): grpc.ClientUnaryCall;
  
  Insert(argument: _Custumer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  Insert(argument: _Custumer, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  Insert(argument: _Custumer, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  Insert(argument: _Custumer, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  insert(argument: _Custumer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  insert(argument: _Custumer, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  insert(argument: _Custumer, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  insert(argument: _Custumer, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  
  Remove(argument: _CustumerRequestId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Empty__Output) => void): grpc.ClientUnaryCall;
  Remove(argument: _CustumerRequestId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _Empty__Output) => void): grpc.ClientUnaryCall;
  Remove(argument: _CustumerRequestId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Empty__Output) => void): grpc.ClientUnaryCall;
  Remove(argument: _CustumerRequestId, callback: (error?: grpc.ServiceError, result?: _Empty__Output) => void): grpc.ClientUnaryCall;
  remove(argument: _CustumerRequestId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Empty__Output) => void): grpc.ClientUnaryCall;
  remove(argument: _CustumerRequestId, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _Empty__Output) => void): grpc.ClientUnaryCall;
  remove(argument: _CustumerRequestId, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Empty__Output) => void): grpc.ClientUnaryCall;
  remove(argument: _CustumerRequestId, callback: (error?: grpc.ServiceError, result?: _Empty__Output) => void): grpc.ClientUnaryCall;
  
  Update(argument: _Custumer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  Update(argument: _Custumer, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  Update(argument: _Custumer, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  Update(argument: _Custumer, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  update(argument: _Custumer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  update(argument: _Custumer, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  update(argument: _Custumer, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  update(argument: _Custumer, callback: (error?: grpc.ServiceError, result?: _Custumer__Output) => void): grpc.ClientUnaryCall;
  
}

export interface CustumerServiceHandlers extends grpc.UntypedServiceImplementation {
  Get: grpc.handleUnaryCall<_CustumerRequestId__Output, _Custumer>;
  
  GetAll: grpc.handleUnaryCall<_Empty__Output, _CustumerList>;
  
  Insert: grpc.handleUnaryCall<_Custumer__Output, _Custumer>;
  
  Remove: grpc.handleUnaryCall<_CustumerRequestId__Output, _Empty>;
  
  Update: grpc.handleUnaryCall<_Custumer__Output, _Custumer>;
  
}

export interface CustumerServiceDefinition extends grpc.ServiceDefinition {
  Get: MethodDefinition<_CustumerRequestId, _Custumer, _CustumerRequestId__Output, _Custumer__Output>
  GetAll: MethodDefinition<_Empty, _CustumerList, _Empty__Output, _CustumerList__Output>
  Insert: MethodDefinition<_Custumer, _Custumer, _Custumer__Output, _Custumer__Output>
  Remove: MethodDefinition<_CustumerRequestId, _Empty, _CustumerRequestId__Output, _Empty__Output>
  Update: MethodDefinition<_Custumer, _Custumer, _Custumer__Output, _Custumer__Output>
}
