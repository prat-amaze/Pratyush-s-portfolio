import React from 'react';
import { ThreeDCardDemo } from './ThreeDCardDemo';

const Projects = () => {
  return (
    <div className="w-full px-4 py-10 flex flex-col items-center">
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">
        Recent Projects
      </h1>
      
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
        <ThreeDCardDemo
          title="LinkTree Clone"
          desc="A minimalist Next.js-based platform to showcase multiple profile or content links."
          live="https://link-tree-nine-pi.vercel.app/"
          repo="https://github.com/prat-amaze/LinkTree"
          image="/linkTree.png"
        />
        <ThreeDCardDemo
          title="BlogSpace"
          desc="A sleek markdown-powered blog app with real-time content publishing using Next.js."
          live="https://blog-space-taupe.vercel.app/"
          repo="https://github.com/prat-amaze/BlogSpace"
          image="/blogspace.png"
        />
        <ThreeDCardDemo
          title="To-Do List"
          desc="A minimal and responsive to-do list app built using JavaScript, featuring local storage for persistent task management."
          live="https://prat-amaze.github.io/ToDoList-App/"
          repo="https://github.com/prat-amaze/ToDoList-App"
          image="/todo.png"
        />
        <ThreeDCardDemo
          title="FoodRecipe-App"
          desc="A React-based recipe search app that fetches and displays delicious food recipes using a public API."
          live="https://food-recipe-app-inky-six.vercel.app/"
          repo="https://github.com/prat-amaze/FoodRecipe-App"
          image="/foodrecipe.png"
        />
      </div>
    </div>
  );
};

export default Projects;
