import skills from "@/constant/Images";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-10">
      <h1 className="text-3xl text-center">
        Tech <span className="text-teal-400">Stacks</span>
      </h1>
      <div className="w-full flex justify-center items-center gap-10 mt-10 flex-wrap">
        {skills.map((el, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <Image
              className="object-contain rounded-full"
              src={el.icon}
              width={60}
              height={60}
              alt={el.title}
            />
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
