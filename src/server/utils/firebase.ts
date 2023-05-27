import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "../keys/.firebase.json";

export const app = initializeApp({
  credential: cert(serviceAccount as Record<string, string>),
});

export const db = getFirestore();
