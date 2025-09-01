// auth.js (Authentication functions)
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Sign up function
export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful!");
    return userCredential.user;
  } catch (error) {
    alert(error.message);
  }
}

// Login function
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    return userCredential.user;
  } catch (error) {
    alert(error.message);
  }
}

// Logout function
export async function logout() {
  try {
    await signOut(auth);
    alert("Logged out successfully!");
  } catch (error) {
    alert(error.message);
  }
}