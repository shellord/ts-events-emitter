# ts-events-emitter

A typesafe event emitter for TypeScript.

## Installation

```bash
npm install ts-events-emitter
```

## Usage

```ts
import { EventEmitter } from "ts-events-emitter";

type MyEvent = {
  foo: string;
};

const emitter = new EventEmitter<MyEvent>();

emitter.on("foo", (event) => {
  console.log(event.foo);
});

emitter.emit("foo", { foo: "bar" });
```

## API

### `eventsEmitter`

#### `emit`

```ts
 emit: (event: T, message: TMessage) => void;
```

#### `on`

```ts
on: (event: T, callback: (message: TMessage) => void) => void;
```

#### `once`

```ts
once: (event: T, callback: (message: TMessage) => void) => void;
```

#### `off`

```ts
off: (event: T, callback: (message: TMessage) => void) => void;
```

#### `removeAllListeners`

```ts
removeAllListeners: (event: T) => void;
```
