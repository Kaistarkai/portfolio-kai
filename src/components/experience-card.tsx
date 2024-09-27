"use client"

import React from "react";
import MotionDiv from "@/components/motion-div";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface ExperienceCardProps {
    id: number;
    company: string;
    position: string;
    date: string;
    description: string;
    location: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ id, company, position, date, description, location }) => {
    let delayTime = id * 0.1;
    const locationIcon = faLocationDot;
    const dateIcon = faCalendar;

    return (
    <MotionDiv className="w-full" delayOffset={delayTime}>
      <div className="flex flex-col w-full gap-2">
        <div className="flex w-full">
            <div className="flex flex-row gap-4">
                <h3>{company}</h3>
                <h3>{position}</h3>
            </div>
        </div>
        <div className="flex gap-4">
            <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={locationIcon} />
                <span className="text-zinc-500"> {location} </span>
            </div>
            <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={dateIcon} />
                <span className="text-zinc-500">{date}</span>
            </div>
        </div>
        <p>{description}</p>
      </div>
    </MotionDiv>
    );
  };

export default ExperienceCard;