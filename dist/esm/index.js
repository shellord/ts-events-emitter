"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventsEmitter = () => {
    const listeners = new Map();
    const on = (event, callback) => {
        var _a;
        if (listeners.has(event)) {
            return (_a = listeners.get(event)) === null || _a === void 0 ? void 0 : _a.push(callback);
        }
        listeners.set(event, [callback]);
    };
    const emit = (event) => {
        var _a;
        if (listeners.has(event)) {
            (_a = listeners.get(event)) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback());
        }
    };
    return {
        on,
        emit,
    };
};
exports.default = eventsEmitter;
