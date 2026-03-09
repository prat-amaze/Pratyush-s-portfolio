"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ProjectCard({ title, desc, live, repo, image, wip }) {
  return (
    <CardContainer className="inter-var w-full h-full" containerClassName="w-full h-full py-3">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black-100 border-white/[0.2] w-full max-w-[30rem] h-full rounded-xl p-6 border flex flex-col">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white w-full flex justify-center items-center gap-3 mb-4"
        >
          {title}
          {wip && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 whitespace-nowrap">
              WIP
            </span>
          )}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2 text-neutral-300">
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          {image ? (
            <img
              src={image}
              height="1000"
              width="1000"
              className="h-60 w-full rounded-xl group-hover/card:shadow-xl object-fill"
              alt="thumbnail"
            />
          ) : (
            <div className="h-60 w-full rounded-xl bg-gradient-to-br from-violet-950 to-indigo-950 flex items-center justify-center group-hover/card:shadow-xl">
              <span className="text-neutral-500 text-sm">Preview not available</span>
            </div>
          )}
        </CardItem>
        <div className="flex justify-between items-center mt-auto pt-6">
          <CardItem
            translateZ={20}
            as="a"
            href={wip ? undefined : live}
            target={wip ? undefined : "_blank"}
            className={`px-4 py-2 rounded-xl text-xs font-normal ${wip ? "text-neutral-500 cursor-default" : "text-white"}`}
          >
            {wip ? "Coming Soon" : "Live Demo →"}
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={repo}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            Github Repo
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
