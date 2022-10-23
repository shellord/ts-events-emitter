declare type TMessage = unknown;
declare const eventsEmitter: <T extends string>() => {
    on: (event: T, callback: (message: TMessage) => void) => void;
    emit: (event: T, message: TMessage) => void;
    once: (event: T, callback: (message: TMessage) => void) => void;
    off: (event: T, callback: (message: TMessage) => void) => void;
    removeAllListeners: (event: T) => void;
};
export default eventsEmitter;
