interface User {
  id: string;
  username: string;
}

const users = new Map<string, User>();

users.set("1", {
  id: "1",
  username: "Plato",
});

users.set("2", {
  id: "2",
  username: "Socrates",
});

interface Message {
  id: string;
  text: string;
  userId: string;
}

const messages = new Map<string, Message>();

messages.set("1", {
  id: "1",
  text: "Hi World!",
  userId: "1",
});

messages.set("2", {
  id: "2",
  text: "Hello World!",
  userId: "2",
});

export { messages, users };
