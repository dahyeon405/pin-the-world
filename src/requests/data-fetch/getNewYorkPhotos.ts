import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAt,
} from "firebase/firestore";
import db from "../firebase";
import { BlockItem } from "@/types";

export const NEWYORK_PHOTOS_LIMIT = 3;

export const getNewYorkPhotos = async (page: number = 1) => {
  const _page = page - 1;

  const newYorkCollection = collection(db, "newYork");
  const _query = query(
    newYorkCollection,
    orderBy("id", "asc"),
    limit(NEWYORK_PHOTOS_LIMIT),
    startAt(_page * NEWYORK_PHOTOS_LIMIT),
  );

  const docSnap = await getDocs(_query);

  const data: BlockItem[] = [];

  docSnap.forEach((doc) => {
    data.push(doc.data() as BlockItem);
  });

  return data;
};
