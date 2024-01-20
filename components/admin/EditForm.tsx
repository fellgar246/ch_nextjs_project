"use client"

import { useState, useRef, useEffect } from "react"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config"
import { ProductDataType } from "@/types/IProduct";

interface EditFormProps {
    slug: string;
}
    
const editProduct = async (values: ProductDataType, file: Blob | Uint8Array | ArrayBuffer) => {
 
    const storageRef = ref(storage, values.slug);
    const fileSnapshot = await uploadBytes(storageRef, file);

    const fileUrl = await getDownloadURL(fileSnapshot.ref);

    const docRef = doc(db, "products", values.slug);


    return await setDoc(docRef, {
        ...values,
        price: Number(values.price),    
        inStock: Number(values.inStock),
        image: fileUrl
    })
}
//TODO: Terminar formulario
//TODO: Terminar funcuión edit product

const EditForm = ( { slug }: EditFormProps) => {

    const [product, setProduct] = useState<ProductDataType>({
        id: 0,
        title: '',
        description: '',
        inStock: 0,
        price: 0,
        slug: '',
        image: '',
        type: '',
        size: '',
    });
    const [file, setFile] = useState<Blob | Uint8Array | ArrayBuffer>()
    const formRef = useRef<HTMLFormElement>(null); 
    const initialValues: ProductDataType = {
        id: 0,
        title: '',
        description: '',
        inStock: 0,
        price: 0,
        slug: '',
        image: '',
        type: '',
        size: '',
    }
    const [values, setValues] = useState<ProductDataType>(initialValues)

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:3000/api/product/${slug}`, {
                cache: 'no-store'
            });

            // if (response.ok) {
            //     const productData = await response.json();
            //     setProduct(productData);
            if (response.ok) {
                const productData = await response.json();
                setValues(productData);
            } else {
                console.log(`HTTP error! status: ${response.status}`);
            }
        };

        if (slug.length > 0) {
            fetchProduct();
        }
    }, [slug]);

    if (slug.length === 0) return <h1>Not found</h1>;


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        values.id = Date.now()
        if (file) {
            await editProduct(values, file)
        }
        console.log('Producto creado');
        setValues(initialValues)
        setFile(undefined)
        if (formRef.current) {
            formRef.current.reset(); 
        }
    }


  return (
    <div className="container m-auto mt-6 max-w-lg">
        <form ref={formRef} onSubmit={handleSubmit} className="my-12">
            <label>Slug:</label>
            <input 
                type="text" 
                name="slug" 
                value={values.slug}
                onChange={handleChange} 
                className="block w-full border p-2 rounded my-2" 
            />

            <label>Title:</label>
            <input 
                type="text" 
                name="title" 
                value={values.title}
                onChange={handleChange} 
                className="block w-full border p-2 rounded my-2"
            />

            <label>Description:</label>
            <input 
                type="text" 
                name="description" 
                value={values.description}
                onChange={handleChange} 
                className="block w-full border p-2 rounded my-2"
            />

            <label>Price:</label>
            <input 
                type="number" 
                name="price" 
                value={values.price}
                onChange={handleChange} 
                className="block w-full border p-2 rounded my-2"
            />

            <label>In Stock:</label>
            <input 
                type="number" 
                name="inStock" 
                value={values.inStock}
                onChange={handleChange} 
                className="block w-full border p-2 rounded my-2"
            />

            <label>Size:</label>
            <input 
                type="text" 
                name="size" 
                value={values.size}
                onChange={handleChange} 
                className="block w-full border p-2 rounded my-2"
            />

            <label>Image:</label>
            <input 
                type="file" 
                name="image" 
                onChange={(e) => setFile(e.target.files![0])} 
                className="block w-full border p-2 rounded my-2"
            />

            <label>Category:</label>
            <input 
                type="text" 
                name="type" 
                value={values.type}
                onChange={handleChange} 
                className="block w-full border p-2 rounded my-2"
            />

            <button type="submit">Enviar</button>

        </form> 

    </div>
  )
}

export default EditForm