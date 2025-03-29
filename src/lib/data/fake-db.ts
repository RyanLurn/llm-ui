// src/fakeDb.ts (or wherever your mock db file is)
import type { FakeDbType, ChatType, MessageType } from "./types"; // Adjust the path if necessary

// Helper function to create timestamps easily (optional, but helps)
// Creates timestamps relative to 'now', going back in time
const createTimestamp = (offsetMinutes: number): string => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - offsetMinutes);
  return date.toISOString();
};

// --- Chat 1 Data ---
const chatId1 = "c1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6";
const chat1Messages: MessageType[] = [
  {
    id: "msg-1-1",
    role: "user",
    content: "Hey, can you explain TypeScript interfaces?",
    createdAt: createTimestamp(120), // 2 hours ago
    chatId: chatId1,
  },
  {
    id: "msg-1-2",
    role: "assistant",
    content:
      "Sure! Interfaces in TypeScript define the 'shape' of an object. They specify what properties an object should have and what their types should be. Think of them as a contract for your object structure.",
    createdAt: createTimestamp(118), // 1 hour 58 mins ago
    chatId: chatId1,
  },
  {
    id: "msg-1-3",
    role: "user",
    content: "Okay, so how is that different from a `type` alias?",
    createdAt: createTimestamp(115), // 1 hour 55 mins ago
    chatId: chatId1,
  },
  {
    id: "msg-1-4",
    role: "assistant",
    content:
      "Good question! They are very similar and often interchangeable. Key differences:\n1. **Declaration Merging:** Interfaces can be defined multiple times and TypeScript will merge their definitions. Type aliases cannot.\n2. **Extending:** Both can be extended, but the syntax differs slightly (`extends` for interfaces, intersection (`&`) for types).\n\nGenerally, use interfaces for defining object shapes, especially if you expect them to be extended or implemented by classes. Use types for more complex scenarios, unions, intersections, or primitives.",
    createdAt: createTimestamp(114), // 1 hour 54 mins ago
    chatId: chatId1,
  },
];

// --- Chat 2 Data ---
const chatId2 = "d2e3f4a5-b6c7-d8e9-f0a1-b2c3d4e5f6a7";
const chat2Messages: MessageType[] = [
  {
    id: "msg-2-1",
    role: "user",
    content: "What are some good libraries for state management in React?",
    name: "Alice", // Example with optional name
    createdAt: createTimestamp(65), // 1 hour 5 mins ago
    chatId: chatId2,
  },
  {
    id: "msg-2-2",
    role: "assistant",
    content:
      "There are several popular options:\n- **Redux (with Redux Toolkit):** A predictable state container, great for large applications.\n- **Zustand:** A smaller, faster, and simpler alternative to Redux.\n- **Jotai:** An atom-based approach, very flexible.\n- **React Context API (with useReducer):** Built-in solution, suitable for less complex state.",
    createdAt: createTimestamp(63), // 1 hour 3 mins ago
    chatId: chatId2,
  },
  {
    id: "msg-2-3",
    role: "user",
    content: "I've heard Zustand is quite minimal. Is it good for beginners?",
    name: "Alice",
    createdAt: createTimestamp(60), // 1 hour ago
    chatId: chatId2,
  },
];

// --- Chat 3 Data ---
const chatId3 = "e3f4a5b6-c7d8-e9f0-a1b2-c3d4e5f6a7b8";
const chat3Messages: MessageType[] = [
  {
    id: "msg-3-1",
    role: "user",
    content: "Tell me a short story about a brave squirrel.",
    createdAt: createTimestamp(30), // 30 mins ago
    chatId: chatId3,
  },
  {
    id: "msg-3-2",
    role: "assistant",
    content:
      "Pip was no ordinary squirrel. While others gathered nuts, Pip dreamed of the Great Oak on the other side of the roaring river. One crisp autumn morning, armed with a sturdy leaf as a makeshift boat and unwavering courage, Pip set sail. Dodging rapids and a grumpy frog, Pip finally reached the far bank, becoming the first squirrel to ever do so. He didn't find bigger nuts, but he found adventure, and that was far more precious.",
    createdAt: createTimestamp(28), // 28 mins ago
    chatId: chatId3,
  },
  {
    id: "msg-3-3",
    role: "user",
    content: "Haha, I love it!",
    createdAt: createTimestamp(25), // 25 mins ago
    chatId: chatId3,
  },
];

// --- Combine all messages ---
const allMessages: MessageType[] = [
  ...chat1Messages,
  ...chat2Messages,
  ...chat3Messages,
];

// --- Create Chat Summaries ---
const allChats: ChatType[] = [
  {
    id: chatId1,
    title: "TypeScript Interfaces vs Types",
    createdAt: chat1Messages[0].createdAt, // Timestamp of the first message
    lastOpenedAt: chat1Messages[chat1Messages.length - 1].createdAt, // Timestamp of the last message
  },
  {
    id: chatId2,
    title: "React State Management Options",
    createdAt: chat2Messages[0].createdAt,
    lastOpenedAt: chat2Messages[chat2Messages.length - 1].createdAt,
  },
  {
    id: chatId3,
    title: "Story: The Brave Squirrel",
    createdAt: chat3Messages[0].createdAt,
    lastOpenedAt: chat3Messages[chat3Messages.length - 1].createdAt,
  },
];

// --- The final seeded DB ---
const fakeDb: FakeDbType = {
  chats: allChats,
  messages: allMessages,
};

export { fakeDb };

// Optional: Export types again from here if this is the main module
// export type { MessageType, ChatType, FakeDbType } from "./types";
