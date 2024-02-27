import { LktEvent } from '../classes/LktEvent';
export const createLktEvent = (id, value) => {
    return new LktEvent(id, value);
};
