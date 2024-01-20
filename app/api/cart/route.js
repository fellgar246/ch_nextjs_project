import { NextResponse } from "next/server"
import { collection, getDocs, query, where, getDoc } from "firebase/firestore"
import { db } from "@/firebase/config"

export const GET = async () => {
    
    const productsRef = collection(db, 'cart');
    const querySnapshot = await getDocs(productsRef);
    const docs = querySnapshot.docs.map(doc => doc.data());
    return NextResponse.json(docs)


}