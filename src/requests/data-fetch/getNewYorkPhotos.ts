import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import { BlockItem } from "@/types";

export const getNewYorkPhotos = async () => {
  const docSnap = await getDocs(collection(db, "newYork"));

  const data: BlockItem[] = [];

  docSnap.forEach((doc) => {
    data.push(doc.data() as BlockItem);
  });

  return data;
};
