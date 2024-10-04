import { useEffect, useState } from "react";
import { db } from "@/utils/firestore";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

const RoomChatMessage = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userId, setUserId] = useState("");

  function handleSetUserId(userIdd) {
    setUserId(userIdd);
  }

  useEffect(() => {
    if (!roomId) return;

    // Reference to the messages subcollection of the specific room
    const messagesRef = collection(db, "room", roomId, "messages");
    const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));

    // Listen for real-time updates to the messages subcollection
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const roomMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(roomMessages);
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, [roomId]);

  // Function to handle sending a new message
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!newMessage.trim()) return; // Don't send empty messages

    const messagesRef = collection(db, "room", roomId, "messages");
    const timestamp = serverTimestamp();

    // Add the new message to the messages subcollection
    await addDoc(messagesRef, {
      content: newMessage,
      senderId: userId,
      timestamp: timestamp,
    });

    // Update the room document with the last message details
    const roomRef = doc(db, "room", roomId);
    await updateDoc(roomRef, {
      lastMessage: newMessage,
      lastMessageTimestamp: timestamp,
    });

    setNewMessage(""); // Clear the input after sending
  };

  return (
    <div className="mt-4 border p-4">
      <button onClick={() => handleSetUserId("user1")}>User1</button>
      <button onClick={() => handleSetUserId("user2")} className="ml-2">
        User2
      </button>

      <h3>Chat Room: {roomId}</h3>
      <div
        className="messages-container"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.senderId === userId ? "sent" : "received"}`}
          >
            <strong>
              {message.senderId === userId ? "You" : message.senderId}:
            </strong>{" "}
            {message.content}
            <br />
            <small>
              {new Date(message.timestamp?.toDate()).toLocaleTimeString()}
            </small>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSendMessage}
        className="send-message-form"
        style={{ marginTop: "10px" }}
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ width: "80%", marginRight: "5px" }}
        />
        <button type="submit" style={{ width: "15%" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default RoomChatMessage;
