"use client";

import React from "react";
import MotionDiv from "@/components/motion-div";
import ExperienceCard from "@/components/experience-card";

import ExperienceListData from "../data/experience";

export default function ExperienceList() {
    return (
        <div className="flex w-full flex-col gap-8">
            {ExperienceListData.map((experience, index) => (
                <ExperienceCard
                    id={index}
                    company={experience.company}
                    position={experience.position}
                    date={experience.date}
                    description={experience.description}
                    location={experience.location}
                />
            ))}
        </div>
    );
}