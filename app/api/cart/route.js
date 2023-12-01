
export const GET = async (_, { params }) => {
    const { id } = params
    
    const userId = EtEmtxQrhnak2XAGuQH4CFcXjfI3

    const docRef = doc(db, 'cart', userId)

    const  docSnapshot = await getDoc(docRef)

    return NextResponse.json(docSnapshot.data())

}