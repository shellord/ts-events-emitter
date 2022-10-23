type StringKeyedObject = {
  [key: string]: unknown;
};

export const createEventEmitter = <T extends StringKeyedObject>() => {
  const listeners = new Map<keyof T, Array<(message: any) => void>>();

  const on = <P extends keyof T>(
    event: P,
    callback: (message: T[P]) => void
  ) => {
    if (listeners.has(event)) {
      listeners.get(event)?.push(callback);
      return;
    }
    listeners.set(event, [callback]);
  };

  const emit = <P extends keyof T>(event: P, message: T[P]) => {
    listeners.get(event)?.forEach((callback) => callback(message));
  };

  const off = <P extends keyof T>(
    event: P,
    callback: (message: T[P]) => void
  ) => {
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

  const once = <P extends keyof T>(
    event: P,
    callback: (message: T[P]) => void
  ) => {
    const onceCallback = (message: T[P]) => {
      callback(message);
      off(event, onceCallback);
    };
    on(event, onceCallback);
  };

  const offAll = (event: keyof T) => {
    listeners.delete(event);
  };

  return {
    on,
    emit,
    off,
    once,
    offAll,
  };
};
