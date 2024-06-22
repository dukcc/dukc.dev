export default function PostItem({
  title,
  description,
  link,
  colour,
  image,
  cursorPosition,
}: {
  title: string;
  description: string;
  link: string;
  colour: string;
  image: string;
  cursorPosition: { x: number; y: number };
}) {
  return (
    <div className="group w-full h-fit">
      <a
        href={link}
        className={`px-12 py-32 flex justify-between max-[750px]:flex-col max-[750px]:items-start items-center border-b-[5px] hover:border-b-[25px] transition-[border-width] duration-200 ease-out hover:cursor-[url(${image})]`}
        style={{ borderBottomColor: colour }}
      >
        <h3 className="text-h3 font-bold max-[750px]:text-h4">{title}</h3>
        <p className="text-body">{description}</p>
      </a>
      <img
        src={image}
        alt="image"
        className="absolute top-128 group-hover:block hidden"
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          transform: "translate(-50%, -50%)", // Center the image under the cursor
        }}
      />
    </div>
  );
}
