import Counter from "../_components/Counter";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";

// import Navigation from "../_components/navigation";

// export default async function Page() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   // console.log(data);

//   return (
//     <div>
//     {/* <Navigation /> */}
//     <h1>Cabins page</h1>
//     <ul>
//         {data.map((el) => (
//           <li key={el.id}>{el.name}</li>
//         ))}
//       </ul>
//       <Counter users={data} />
//       </div>
//     );
//   }
// export default async function Page() {
//   return (
//     <div>
//       <h1>Cabins page</h1>
//     </div>
//   );
// }

export const metadata = {
  title: "Cabins",
};
// export const revalidate = 0; // value always be in second

/* see the revalidate = 0 mean always get data from the database(supabase) in this case which is not good as for this page data change very less times 
so what we can do that using incremental  static regeneration (mean define the time when data will be refetched) 
Let assume refetched once per hour
*/
export const revalidate = 3600;
// export const revalidate = 15; //for testing purpuse
export default function Page() {
  // CHANGE
  // console.log("Starting ............");

  // const cabins = await getCabins();
  // console.log(cabins);

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
