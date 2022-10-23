import eventsEmitter from "../src/index";

type TEvents = {
  "user:created": {
    id: string;
    name: string;
  };
  "user:updated": {
    id: string;
    name: string;
  };
};
const event = eventsEmitter<TEvents>();

event.on("user:created", (message) => {
  console.log(message.name);
});

event.emit("user:updated", { id: "1", name: "John" });
