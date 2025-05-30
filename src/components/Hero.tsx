import { motion, LayoutGroup } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const env = import.meta.env;

const Hero = () => {
  const exampleImages = [
    {
      url: `${env.VITE_STATIC_ASSETS}/portofolio/header/0.png`,
      title: "Placeholder Image 1"
    },
    {
      url: `${env.VITE_STATIC_ASSETS}/portofolio/header/1.png`,
      title: "Placeholder Image 2"
    },
    {
      url: `${env.VITE_STATIC_ASSETS}/portofolio/header/2.png`,
      title: "Placeholder Image 3"
    },
    {
      url: `${env.VITE_STATIC_ASSETS}/portofolio/header/3.png`,
      title: "Placeholder Image 4"
    },
    {
      url: `${env.VITE_STATIC_ASSETS}/portofolio/header/4.png`,
      title: "Placeholder Image 5"
    }
  ];

  return (
    <section className="w-full h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-start relative pt-16 md:pt-24">
      <Floating sensitivity={-0.5} className="h-full z-0">
        <FloatingElement depth={0.5} className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]">
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]">
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]">
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]">
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]">
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-start items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto pt-8 md:pt-12">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-0 md:space-y-2 my-0"
        >
          <span>Make your </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <motion.span layout className="flex whitespace-pre" transition={{
                type: "spring",
                damping: 30,
                stiffness: 400
              }}>
                designs{" "}
              </motion.span>
              <TextRotate
                texts={["fancy", "fun", "lovely ♥", "weird", "funky", "💃🕺", "sexy", "🕶️ cool", "go 🚀", "🔥🔥🔥", "pop ✨", "rock 🤘"]}
                mainClassName="overflow-hidden pr-3 text-primary py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400
                }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center pt-4 sm:pt-8 md:pt-10 lg:pt-12 text-muted-foreground"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
        </motion.p>
      </div>

      <canvas className="bg-skin-base pointer-events-none absolute inset-0 mx-auto" id="canvas"></canvas>
    </section>
  );
};

export default Hero;
