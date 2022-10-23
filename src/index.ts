type TMessage = unknown;

const eventsEmitter = <T extends string>() => {
  const listeners = new Map<T, Array<(message: TMessage) => void>>();

  const on = (event: T, callback: (message: TMessage) => void) => {
    if (listeners.has(event)) {
      listeners.get(event)?.push(callback);
      return;
    }
    listeners.set(event, [callback]);
  };

  const emit = (event: T, message: TMessage) => {
    listeners.get(event)?.forEach((callback) => callback(message));
  };

  const once = (event: T, callback: (message: TMessage) => void) => {
    const onceCallback = (message: TMessage) => {
      callback(message);
      off(event, onceCallback);
    };
    on(event, onceCallback);
  };

  const off = (event: T, callback: (message: TMessage) => void) => {
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

  const removeAllListeners = (event: T) => {
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

export default eventsEmitter;
