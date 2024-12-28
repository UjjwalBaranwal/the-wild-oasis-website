import Counter from "../_components/Counter";
import Navigation from "../_components/navigation";

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
export const metadata = {
  title: "Cabins",
};
export default async function Page() {
  return (
    <div>
      <h1>Cabins page</h1>
    </div>
  );
}
