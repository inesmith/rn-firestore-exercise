// All of our firestore functionality
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

// TODO: Create new list item function
export const createNewBucketItem = async (item) => {
  try {
    // docRef - our reference to our newly created document
    const docRef = await addDoc(collection(db, "item"), item);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// TODO: Get all list items function
