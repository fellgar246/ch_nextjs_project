import { mockData } from "@/data/products"
import { NextResponse } from "next/server"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "@/firebase/config"

const sleep = async (timer) => new Promise((resolve) => setTimeout(resolve, timer))

export const GET = async (_, { params }) => {
    const { category } = params
    
    const productsRef = collection(db, 'products')

    const q = category === 'all'
        ? productsRef
        : query(productsRef, where('type', '==', category))

    const querySnapshot = await getDocs(q)

    const docs = querySnapshot.docs.map(doc => doc.data())

    return NextResponse.json(docs)


    // const items = categoria === 'all'
    //                 ? mockData
    //                 : mockData.filter(product => product.type === categoria)

    // await sleep(1000)

    // return NextResponse.json(items)
}