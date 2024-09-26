"use client";

import MotionDiv from "@/components/motion-div";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
        <div className="order-2 lg:order-1 lg:w-2/3">
            <MotionDiv delayOffset={0.2}>
            <h2 className="mb-3 w-full text-center md:mb-6">Projects</h2>
            </MotionDiv>
        </div>
    </section>
  )
}