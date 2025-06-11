import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconBinaryTree,
  IconRocket,
  IconCode,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto mb-32">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "JS30 Challenge",
    description:
      "Rebuilding 30 Vanilla JavaScript projects in 30 days to sharpen fundamentals and DOM mastery.",
    header: (
      <Image
        src="https://res.cloudinary.com/wesbos/image/fetch/w_700,q_auto,f_auto/https://courses.wesbos.com/images/JS3-social-share.png"
        alt="JS30 Logo"
        className="w-full h-36 object-cover rounded-xl bg-black p-2"
        width={700}
        height={140}
      />
    ),
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Fullstack Developer @Chubb",
    description:
      "Preparing for my role at Chubb by deepening my skills in React, Next.js, MongoDB, and cloud systems.",
    header: (
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAwFBMVEVuJ8X///9uJ8TUw+1nCcJoFcVvJ8Owlt3///2tjtqFSMxoF8SQY9JsHsNqIsZkAMDw7fn39vy8oeSjgdje1PH6+fl7Pcv///mwlN2gddiOYNK8pOWykOBtKL+0md3j1PZvJM1pEsylfdaMWs5xM8Swit57Q8qSZM6wm9tiBMhwKLmkfd2/pOzk2Oz78f768vK1heV3N8/x5vewiODBr+WHUM28odefZdyqh9vUvfKccNd9QcSYcM/n4OyMXtjYwe4kzvnZAAAEWUlEQVR4nO3Yi1LbOBQGYB/ZUhSEZAgJyv1CCmlKobtAuoF24f3fqrLjGMnuQtlddrwz/zeBmfhYsn2imxVFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8PZsJEgIn8uMg+IjyXld+Zi7JaXRPvkGCVeoUr5BfxL1nUacTEmHq1DeHSwRUPqYjl9yu04jo8XS+U3gVZNHEFmZ9MJtRClQdMVlOl4sl8UtakgqhSSqvsB5gLoaOmpmsRnbVC/dZpHmF6OJ0eaD8dZjmdDnXxKPps2v9gnoMsUufTdnngolptv3XirravafVxWjlhvFprMf/EL8cf3veR/zbVJklVjzp7ZKE+E10qL1lM9SVN+e6HZ8kV0cX8OSrm62tLqmgW+rBWLZGd8iLTfFS7rqQvSy34b2eD8e//0dO/CdNLsrVkyaLxqI6kgZ+sSPWJWrzoh7wr6cKvLEqvqaeKb3ooZS0dklZFy3PJsmEoc+Nq2d7erh4qvb8Z9C3ZeHBScWqyDAneIRpof/zIW9YuHSxKukSnfmUsPaIe39c8JDlbHvqWd0TjIplqJKk1DMKPV7a3Meb8YXi5bGCyRNYL6WuqQ2o3OTH1WrLkS8k6lBSvg3qTKcl+kSzesTTgQTidkdxE5uB2+4eJGkiotqSOqh7e3esuWcEDJW9IluuGcWp8LlnU3resrIvzIJx2pdwYYXQjU5XlY0xyVE0W2wc7ZNvLoWc5ekOyrI1PD3ynI+ruh+6sG24vwnDXdnR+9WauHH6erDLYycddbxS28k0tyxbjdul+sZ8usgG+EiR7mbzTc/4rXktWmKvdrPXrLau+KPm69pNVnSt7Kx412Ksty95PAzHJcDb0p63abHi1bfu2McX7c103lHftMHxD27+4lWZQYzfAL8Jj7hUmX0nlA/xDqjxpu+yGIk/WRTAYpzeyx4sjblHqBngVlG55S4dsgK+Eu9ItHd77if8B7ZJVa1nzX1k6uBV81g39liXSI9srlqx5y4oT5lOt56VDlqxL7UejZCapwckyTJ1L2VGVvYFic+Gni1IKk/XNeAVN4lpWEpXJsvfrNNAn6bes72E0nTW9ZX0n6h2Hel+Wu1vWboAPksV431J/3w35nbSVopL+XJfvhpJ6R6FjKU/KFTzZSvTG0nEwYTSOmckaesznLME/Z10lfJEm+3H3Iu3+vl27+c4v5z6HvDjfJau2cpCyu++2fFQLW7KjRk+HUZRsn+KKp80upM9m8WHwlqYHcTwo3oZENI9GT0Hhp7sN/1R0JLOpVuuMuSn3d+rRu9W6stfYOHqdVJlig5Sv13N/r5QxnST7XGX/uV54xdaJ0lG5vadr1SYL7d5mXgpXN2YbhpnI1O5wP0yJiQhj7HlfON90Dstm28bipcdt7JsMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNv8AMj2WdRTdk3TAAAAAElFTkSuQmCC"
        alt="Chubb logo"
        className="w-full h-36 object-contain rounded-xl bg-black p-2"
        width={300}
        height={140}
      />
    ),
    icon: <IconBinaryTree className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Quarterly Big Projects",
    description:
      "Building one full-stack app every quarter to apply design, backend, and frontend concepts in real-world setups.",
    header: (
      <Image
        src="https://i.pinimg.com/736x/e9/20/81/e92081263f620e23a2a243e031324301.jpg"
        alt="Quarterly Projects"
        className="w-full h-36 object-cover rounded-xl bg-black p-2"
        width={300}
        height={140}
      />
    ),
    icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
  },
];
