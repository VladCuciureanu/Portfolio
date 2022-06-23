export default function Project(props: any) {
  return (
    <div className={`bg-${props.color}-300 text-black rounded-2xl p-6 w-full`}>
      <h1 className="font-bold text-2xl">{props.name}</h1>
      <span className="text-sm">{props.year}</span>
      <hr className={`mt-4 mb-4 border-${props.color}-400`}></hr>
      <p>{props.children}</p>
    </div>
  );
}