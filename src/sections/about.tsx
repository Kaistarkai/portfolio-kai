import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hi, I’m Kelly Chen, a results-driven Product Manager and Software
              Engineer with a passion for designing innovative digital
              solutions. I specialize in taking projects from concept to launch,
              blending technical expertise with a deep understanding of user
              needs to deliver impactful products. With extensive experience
              managing complex B2B platforms, I excel at solving real-world
              problems and bringing creative ideas to life.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              Throughout my career, I’ve successfully led the development of
              <b> 4 enterprise products </b>, including IT service management
              platforms, conference room systems, and event management
              solutions. My technical expertise spans full-stack development,
              utilizing technologies such as <b> TypeScript, React, Next.js,
              Node.js, and PostgreSQL </b>. While at ByteDance, my product helped the
              company <b> save $2.4 million </b> in IT operational costs and enhanced global
              IT service management.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              You can always trust me because I am a self-driven problem solver
              who dares to make decisions and is adept at seeking solutions.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.7}>
            <p>
              I’m currently seeking new opportunities to leverage my skills and
              experience in product management and software development. Let’s
              connect!
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photo.JPG"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo.JPG"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
