export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
}

export interface SanityImage {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}


export interface fullProduct {
    _id: string;
    images: [SanityImage];
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
}