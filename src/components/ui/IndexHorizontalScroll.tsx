import { motion, useScroll } from "framer-motion";

export default function IndexHorizontalScroll() {
  const { scrollY } = useScroll({
    offset: ["-256px", "end end"],
  });

  const skills = [
    "ui design",
    "front end web dev",
    "brand design",
    "3d design",
    "multiplatform app dev",
    "innovative concepts",
  ];

  return (
    <div className="px-48 py-24 flex gap-48 bg-black justify-end">
      {skills.map((index) => {
        return (
          <div key={index} className="flex gap-48">
            {skills.map((skill, innerIndex) => {
              return (
                <motion.h3
                  key={innerIndex}
                  className="text-h3 font-thin whitespace-nowrap"
                  style={{ translateX: scrollY }}
                >
                  {skill}
                </motion.h3>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
