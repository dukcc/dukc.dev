export default function HyperlinkButton({
  link,
  text,
  newTab = false,
  colour = "black",
}: {
  link: string;
  text: string;
  newTab?: boolean;
  colour?: string;
}) {
  return (
    <a
      href={link}
      className="flex gap-6 text-body group active:scale-90 duration-200 ease-out w-fit h-fit"
      style={{ color: colour }}
      target={newTab ? "_blank" : "_self"}
    >
      {text}
      <div className="group-hover:rotate-45 duration-200 ease-out flex items-center justify-center">
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 9.5L10 0.5M10 0.5H1M10 0.5V9.5" stroke={colour} />
        </svg>
      </div>
    </a>
  );
}
