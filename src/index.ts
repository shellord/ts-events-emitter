const eventsEmitter = <T>() => {
  const listeners = new Map<T, Array<() => void>>();

  const on = (event: T, callback: () => void) => {
    if (listeners.has(event)) {
      return listeners.get(event)?.push(callback);
    }
    listeners.set(event, [callback]);
  };

  const emit = (event: T) => {
    if (listeners.has(event)) {
      listeners.get(event)?.forEach((callback) => callback());
    }
  };

  return {
    on,
    emit,
  };
};

export default eventsEmitter;
