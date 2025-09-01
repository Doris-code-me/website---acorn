// db.js (Store/retrieve user details)
import { db } from './firebase.js';
import { doc, setDoc, getDoc } from "firebase/firestore";

// Save or update user details
export async function saveUserDetails(userId, details) {
  try {
    await setDoc(doc(db, "users", userId), details);
    console.log("User details saved!");
  } catch (error) {
    console.error("Error saving user details:", error);
  }
}

// Get user details
export async function getUserDetails(userId) {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }
}