import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

import service from "../keys/firebase";

export const app = initializeApp({ credential: cert(service) }, "app");

export const firestore = getFirestore();
export const auth = getAuth();
