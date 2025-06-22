import { useOutletContext } from "react-router-dom";
import Card from "./card";
import photo1 from "../assets/images/photo-1.jpg";
import photo2 from "../assets/images/photo-2.jpg";
import photo3 from "../assets/images/photo-3.jpg";
import photo4 from "../assets/images/photo-4.jpg";
import photo5 from "../assets/images/photo-5.jpg";
import "../App.css";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 10.99,
    image: photo1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 2,
    title: "Product 2",
    price: 19.99,
    image: photo2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 3,
    title: "Product 3",
    price: 10.99,
    image: photo3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 4,
    title: "Product 4",
    price: 19.99,
    image: photo4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 5,
    title: "Product 5",
    price: 10.99,
    image: photo5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 6,
    title: "Product 6",
    price: 19.99,
    image: photo1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 7,
    title: "Product 7",
    price: 10.99,
    image: photo2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 8,
    title: "Product 8",
    price: 19.99,
    image: photo3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 9,
    title: "Product 9",
    price: 10.99,
    image: photo4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 10,
    title: "Product 10",
    price: 19.99,
    image: photo5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 11,
    title: "Product 11",
    price: 10.99,
    image: photo1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 12,
    title: "Product 12",
    price: 19.99,
    image: photo2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 13,
    title: "Product 13",
    price: 19.99,
    image: photo3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 14,
    title: "Product 14",
    price: 19.99,
    image: photo4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 15,
    title: "Product 15",
    price: 19.99,
    image: photo5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 16,
    title: "Product 16",
    price: 19.99,
    image: photo1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 17,
    title: "Product 17",
    price: 19.99,
    image: photo2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 18,
    title: "Product 18",
    price: 19.99,
    image: photo3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 19,
    title: "Product 19",
    price: 19.99,
    image: photo4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  {
    id: 20,
    title: "Product 20",
    price: 19.99,
    image: photo5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
  },
  // add more as needed
];

export default function Products() {
  const { cartItems, setCartItems } = useOutletContext();

  const handleAddToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    } else {
      alert("Already in cart");
    }
  };

  return (
    <main>
      <div className="cards">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </main>
  );
}
