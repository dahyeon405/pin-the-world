import { collection, getCountFromServer } from 'firebase/firestore'
import db from '@/requests/firebase.ts'
import { NEWYORK_PHOTOS_LIMIT } from '@/requests/data-fetch/getNewYorkPhotos.ts'

export const getNewYorkPageCount = async () => {
  const newYorkCollection = collection(db, 'newYork')

  const snapshot = await getCountFromServer(newYorkCollection)
  const count = snapshot.data().count
  const pageCount = Math.ceil(count / NEWYORK_PHOTOS_LIMIT)

  return pageCount
}
