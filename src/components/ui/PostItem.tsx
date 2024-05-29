export default function PostItem({
  title,
  description,
  link,
  colour,
}: {
  title: string;
  description: string;
  link: string;
  colour: string;
}) {
  return (
    <a
      href={link}
      className={`px-12 py-32 flex justify-between max-[750px]:flex-col max-[750px]:items-start items-center border-b-[5px] hover:border-b-[25px] transition-[border-width] duration-200 ease-out`}
      style={{ borderBottomColor: colour }}
    >
      <h3 className="text-h3 font-bold max-[750px]:text-h4">{title}</h3>
      <p className="text-body">{description}</p>
    </a>
  );
}
