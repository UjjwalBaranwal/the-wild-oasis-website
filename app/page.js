import Link from "next/link";
import Navigation from "./_components/navigation";

export default function Page() {
  return (
    <div>
      {/* <Navigation /> */}
      <h1>The Wild Oasis. Welcome to Paradise</h1>

      {/*
        This will cause whole page to reload      
      <a href="/cabins">explore luxury cabin</a>*/}
      <Link href="/cabins">Explore Luxury Cabins</Link>
    </div>
  );
}
