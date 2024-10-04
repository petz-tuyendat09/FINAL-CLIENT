"use client";

import { useEffect, useState } from "react";
import { db } from "@/utils/firestore"; // Adjust this path based on your Firebase configuration
import { collection, onSnapshot, query, where } from "firebase/firestore";
import RoomChatMessage from "./RoomChatMessage";

const ChatRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Reference to the rooms collection
    const roomsRef = collection(db, "room");
    const roomQuery = query(
      roomsRef,
      where("userIds", "array-contains", "user1"),
    );

    // Listen for real-time updates to the rooms collection
    const unsubscribe = onSnapshot(roomQuery, (snapshot) => {
      const allRooms = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRooms(allRooms);
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  console.log(rooms);

  console.log(rooms[0]?.id);

  return (
    <div className="mt-24 h-screen">
      <h2>All Chat Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            Room ID: {room.id}
            <div>Participants: {room.users.join(", ")}</div>
            {/* Additional room details or actions can go here */}
          </li>
        ))}
      </ul>
      <RoomChatMessage roomId={rooms[0]?.id} />
    </div>
  );
};

export default ChatRooms;
