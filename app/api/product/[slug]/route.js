import { NextResponse } from "next/server"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase/config"


export const GET = async (_, { params }) => {
    const { slug } = params
    
    const docRef = doc(db, 'products', slug)

    const  docSnapshot = await getDoc(docRef)

    return NextResponse.json(docSnapshot.data())

}

export const PUT = async (req, { params }) => {
    const { slug } = params
    const { body } = req

    const docRef = doc(db, 'products', slug)

    try {
        await updateDoc(docRef, body)
        return NextResponse.json({ message: 'Product updated successfully' })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update product' })
    }
}