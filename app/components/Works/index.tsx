import Image from "next/image";
import Work from "./work";
import Professional from "./Professional";
import Hero from "@/public/hero.png";
import { works } from "./datas";

export default function Experience() {
  return (
    <main className='flex w-full flex-col items-center justify-center'>
      <Work />
      <Professional />
    </main>
  );
}
