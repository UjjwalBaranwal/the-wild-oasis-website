import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-end">
      <Spinner />
      <p className="text-xl text-primary-200 ">Loading cabin data</p>
    </div>
  );
}
