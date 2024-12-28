import Counter from "../_components/Counter";
import CabinCard from "@/app/_components/CabinCard";

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
// export const metadata = {
//   title: "Cabins",
// };
// export default async function Page() {
//   return (
//     <div>
//       <h1>Cabins page</h1>
//     </div>
//   );
// }

export default function Page() {
  // CHANGE
  const cabins = [];

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

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
