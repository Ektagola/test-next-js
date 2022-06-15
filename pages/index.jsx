import Link from "next/link";
import { useRouter } from 'next/router'

function index() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/blog/first">
        <a>Blog First</a>
      </Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}

export default index;
