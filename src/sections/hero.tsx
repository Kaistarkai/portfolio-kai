import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";


export default function hero() {

  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hi, I'm Kelly Chen! 👋</MotionText>
      </h1>
      <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv>
          <video
            className="h-[170px] w-[170px] md:h-[190px] md:w-[190px]"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src={"/emoji.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </MotionDiv>
      </div>
      <h1>
        <MotionDiv delayOffset={0.8}>Software Developer 🧑🏻‍💻</MotionDiv>
      </h1>
      <h1>
        <MotionDiv delayOffset={1}>Product Manager 👩‍💼</MotionDiv>
      </h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p>Welcome to my website!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
            I'm a <b> ✨ Full-Stack </b>  Developer with a <b> keen product sense </b>, passionate about building cool things.
          </p>
        </MotionDiv>
      </div>
      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
    </section>
  );
}
