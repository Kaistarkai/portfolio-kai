"use client";

import React from "react";
import MotionDiv from "@/components/motion-div";
import { StaticImageData } from 'next/image';

interface ProjectCardProps {
    id: number;
    name: string;
    description: string;
    techStack: Array<string>;
    githubLink: string;
    demoImage: string | StaticImageData;
}

const isStaticImageData = (image: any): image is StaticImageData => {
    return (image as StaticImageData).src !== undefined;
  };

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, description, techStack, githubLink, demoImage }) => {
    let delayTime = id * 0.1;
    const imageUrl = isStaticImageData(demoImage) ? demoImage.src : demoImage;
    
    return (
        <MotionDiv delayOffset={delayTime}>
            <div className="flex flex-row gap-16 w-full">
                <div className=" w-full order-2 lg:order-1 lg:w-2/3">
                    <img src={imageUrl} alt={name} className="w-full rounded-lg" />
                </div>
                <div className="w-full lg:order-2 lg:w-1/3">
                    <h3 className="mb-3 text-xl">{name}</h3>
                    <p className="mb-3">{description}</p>
                    <div className="flex flex-row gap-2 flex-wrap mb-2">
                        {techStack.map((tech, index) => (
                            <span key={index} className="text-sm bg-gray-200 px-2 py-1 rounded-md">{tech}</span>
                        ))}
                    </div>
                    <a href={githubLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Github</a>

                </div>
            </div>
        </MotionDiv>
    );
}

export default ProjectCard;