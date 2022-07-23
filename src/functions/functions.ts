import {LktEvent} from "../classes/LktEvent";

export const createLktEvent = (id: any, value: any):LktEvent => {
    return new LktEvent(id, value);
}