import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const judul: string | number = "Test"
const deskripsi: string = "Test Deskripsi"

export const addTask = async (e: any) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "task"), {
      judul: judul,
      deskripsi: deskripsi,
      selesai: false,
      created: Timestamp.now(),
    });
  } catch (err) {
    console.log(err);
  }
};
