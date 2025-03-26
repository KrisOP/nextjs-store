"use client";
import Image from "next/image";
import { Description } from "./components/home/Description";
import { Hero } from "./components/home/Hero";
import { MainProducts } from "./components/home/MainProducts";

export default function Home() {
  console.log("Hola mundo xdxd");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-2xl"> Hola mundo home</h1>
       
        <Hero/>
        <Description/>
        <MainProducts/>
      </main>
    </div>
  );
}
