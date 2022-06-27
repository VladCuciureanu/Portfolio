import NextLink from "next/link";

export default function Project(props: any) {
  return (
    <div className={`bg-${props.color}-300 text-black rounded-2xl p-6 w-full h-72`}>
      <h1 className="font-bold text-2xl">{props.name}</h1>
      <span className="text-sm">{props.year}</span>
      <hr className={`mt-3 mb-3 border-${props.color}-400`}></hr>
      <div className="flex flex-col justify-between h-[70%]">
      <p>{props.children}</p>
      <NextLink href={props.link}>
        <button className="hover:bg-gray-200 bg-gray-800 rounded-xl pl-5 pr-5 pt-2 pb-2 font-bold text-base hover:text-gray-800 text-gray-200 transition-all">
          View on Github
        </button>
      </NextLink>
      </div>
    </div>
  );
}
