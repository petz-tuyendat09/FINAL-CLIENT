import { getFirestore } from "firebase/firestore";
import { fireStoreApp } from "./firebase-config";

// Export the Firestore instance
export const db = getFirestore(fireStoreApp);
