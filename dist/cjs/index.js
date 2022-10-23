"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventsEmitter = () => {
    const listeners = new Map();
    const on = (event, callback) => {
        var _a;
        if (listeners.has(event)) {
            (_a = listeners.get(event)) === null || _a === void 0 ? void 0 : _a.push(callback);
            return;
        }
        listeners.set(event, [callback]);
    };
    const emit = (event, message) => {
        var _a;
        (_a = listeners.get(event)) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback(message));
    };
    const once = (event, callback) => {
        const onceCallback = (message) => {
            callback(message);
            off(event, onceCallback);
        };
        on(event, onceCallback);
    };
    const off = (event, callback) => {
        const eventListeners = listeners.get(event);
        if (!eventListeners) {
            return;
        }
        const index = eventListeners.indexOf(callback);
        if (index === -1) {
            return;
        }
        eventListeners.splice(index, 1);
    };
    const removeAllListeners = (event) => {
        listeners.delete(event);
    };
    return {
        on,
        emit,
        once,
        off,
        removeAllListeners,
    };
};
exports.default = eventsEmitter;
