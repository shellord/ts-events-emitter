import eventsEmitter from "../src/index";

const event = eventsEmitter<"add" | "delete">();

event.on("add", (message: unknown) => {
  console.log(message);
});

event.emit("add", "world");
