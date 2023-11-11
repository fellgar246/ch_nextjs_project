

export type ProductDataType = {
    id: number;
    title: string;
    description: string;
    inStock: number;
    price: number;
    slug: string;
    image: string;
    type: string;
    size?: string;
    };



export const mockData: Array<ProductDataType> = [
  {
    id: 1,
    title: "Pastel de Chocolate",
    description: "Clásico pastel estilo americano, con relleno y cubierta de betún cremoso de chocolate. ¡Delicioso y delicado sabor!",
    inStock: 12,
    price: 360,
    slug: "pastel-de-chocolate",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699649438/nextjs-project/hzb8ddael8yltpkb1d2a.webp",
    type: "pasteles",
    size: "grande"
  },
  {
    id: 2,
    title: "Feliz Cumpleaños",
    description: "Dos pisos de pan, el inferior de chocolate y el superior de vainilla relleno y cubierto con betún blanco de mantequilla y decorado con granillo de color.",
    inStock: 12,
    price: 370,
    slug: "feliz-cumpleanos",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699649697/nextjs-project/hiftlgemmcf3vqor2ojn.webp",
    type: "pasteles",
    size: "mediano"
  },
  {
    id: 3,
    title: "Pastel de Zanahoria",
    description: "Pan casero de zanahoria con nueces y cálidas especias, cubierto con suave betún de queso crema y decorado con trazos en forma de zanahorias.",
    inStock: 12,
    price: 435,
    slug: "pastel-de-zanahoria",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699649876/nextjs-project/fpstvzfwmqhdlrr9tzba.webp",
    type: "pasteles",
    size: "grande"
  },
  {
    id: 4,
    title: "Galleta Pincelada",
    description: "Dos galletas caseras unidas por un relleno de chocolate belga y decoradas con trazas de chocolate. ¡Pintadas para tu gusto!",
    inStock: 12,
    price: 155,
    slug: "galleta-pincelada",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699654061/nextjs-project/dtxjcaukgtb1mlkp897f.webp",
    type: "galletas"
  },
  {
    id: 5,
    title: "Galletas Onza",
    description: "Un clásico: dos galletas de mantequilla unidas por una generosa cantidad de cajeta y espolvoreadas con fina azúcar glass. ¡Otras de las favoritas!",
    inStock: 12,
    price: 95,
    slug: "galletas-onza",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699654227/nextjs-project/zigflfigupfgcd6obx6l.webp",
    type: "galletas",
    size: "chico"
  },
  {
    id: 6,
    title: "Galletas Centenario",
    description: "Galletas recién horneadas, con el sabor casero de la mantequilla, rellenas de mermelada de chabacano o fresa y espolvoreadas con azúcar glass. ¡Las consentidas de muchos!",
    inStock: 12,
    price: 95,
    slug: "galletas-centenario",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699654384/nextjs-project/gixzvzn93bizp2chqhfc.webp",
    type: "galletas",
    size: "chico"
  },
  {
    id: 7,
    title: "Pay de Limón",
    description: "El clásico y delicioso pay de limón con costra de merengue y nuez, sobre una crujiente base de galleta. ¡Cremoso y riquísimo! Para comer en compañía, ¡o solo!",
    inStock: 12,
    price: 380,
    slug: "pay-de-limon",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699654581/nextjs-project/wevq22khgwycbqosyvbx.webp",
    type: "pays",
    size: "mediano"
  },
  {
    id: 8,
    title: "Pays de Queso con Moras",
    description: "Pay de queso con moras adornado con crema chantilly. Un postre tradicional americano.",
    inStock: 12,
    price: 499,
    slug: "pay-queso-moras",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699654684/nextjs-project/jzfivnxxuw2lks0hfzbd.webp",
    type: "pays",
    size: "mediano"
  },
  {
    id: 9,
    title: "Pay Dulce de Leche",
    description: "Deliciosa y clásica receta: suave pay de queso con cremoso dulce de leche. ¡Perfecto para compartir entre amigos!",
    inStock: 12,
    price: 380,
    slug: "pay-dulce-leche",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699654772/nextjs-project/jo2czgqhuvimfi6m3z9r.webp",
    type: "pays",
    size: "mediano"
  },
  {
    id: 10,
    title: "Muffin de Chocolate",
    description: "Panecillo de chocolate cubierto con betún blanco y chispas de chocolate.",
    inStock: 12,
    price: 22,
    slug: "muffin-chocolate",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699654929/nextjs-project/d4yzlyqbfr6d6oxbnpwq.webp",
    type: "muffins"
  },
  {
    id: 11,
    title: "Muffin de Zanahoria",
    description: "Pastelillo de zanahoria y nueces coronado con betún especial de queso crema",
    inStock: 12,
    price: 25,
    slug: "muffin-zanahoria",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699655026/nextjs-project/tdopvxhi5hnnbhnv0nbt.webp",
    type: "muffins"
  },
  {
    id: 12,
    title: "Muffin Red Velvet",
    description: "Panecillo con cacao, vestido a la moda del terciopelo rojo, adornado con su clásico betún de queso crema.",
    inStock: 12,
    price: 25,
    slug: "muffin-red-velvet",
    image: "https://res.cloudinary.com/dvvqbwhcc/image/upload/v1699655163/nextjs-project/zc2qdrct0hoqpb1tyw1d.webp",
    type: "muffins"
  },
];

