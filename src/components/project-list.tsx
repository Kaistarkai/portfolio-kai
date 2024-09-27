"use client";

import React from "react";
import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import ProjectCard from "@/components/project-card";
import ProjectListData from "../data/projects";

export default function ProjectList() {
  return (
    <div className="flex w-full flex-col gap-8">
            {ProjectListData.map((project, index) => (
            <ProjectCard
                id={index}
                name={project.name}
                description={project.description}
                techStack={project.techStack}
                githubLink={project.githubLink}
                demoImage={project.image}
            />
            ))}
    </div>
  );
}
