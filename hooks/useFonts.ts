import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["600"], subsets: ["devanagari"] });

const useFonts = () => {
  return { poppins };
};

export default useFonts;
