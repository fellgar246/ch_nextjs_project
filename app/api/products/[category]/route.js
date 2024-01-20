import { NextResponse } from "next/server"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase/config"

export const GET = async (_, { params }) => {
    const { category } = params
    
    const productsRef = collection(db, 'products')

    const queryCategory = category === 'all'
        ? productsRef
        : query(productsRef, where('type', '==', category))

    const querySnapshot = await getDocs(queryCategory)

    const docs = querySnapshot.docs.map(doc => doc.data())

    return NextResponse.json(docs)

}