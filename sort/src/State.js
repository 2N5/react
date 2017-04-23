import { users } from './users';

class State {
    constructor(o) {
        this.setState(o);
    }

    setState(o) {
        Object.keys(o).forEach((key) => {
            Object.defineProperty(this, key, {
                get: () => o[key],
                configurable: true
            });
        });
    }
}

export const state = new State({users});
