"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo({title, desc, live, repo, image}) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black-100 border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold  text-white w-full flex justify-center mb-4">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300">
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl group-hover/card:shadow-xl object-fill"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={live}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white">
            Live Demo →
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            className="px-4 py-2 rounded-xl  bg-white text-black  text-xs font-bold"
            href={repo}
            >
            Github Repo
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
