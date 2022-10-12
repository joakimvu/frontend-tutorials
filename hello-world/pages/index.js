import Link from "next/link";
import { useRouter } from "next/router";

// Tutorial from
// https://www.youtube.com/watch?v=9P8mASSREYM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=2
export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.replace("/product");
  };

  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
