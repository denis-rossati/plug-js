import {JsonObject} from './sdk/json';

export interface SlotMap {
}

export type FetchOptions = {
    timeout?: number,
    attributes?: JsonObject,
};

export type SlotId = keyof SlotMap extends never ? string : keyof SlotMap;

export type SlotContent<I extends SlotId> = I extends keyof SlotMap ? SlotMap[I] : JsonObject;

export type FetchResponse<I extends SlotId, P extends JsonObject = JsonObject> = {
    payload: SlotContent<I> & P,
};
