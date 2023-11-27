import aw from "@/public/assets/aw.png";
import aw1 from "@/public/assets/aw1.png";
import aw2 from "@/public/assets/aw2.png";
import aw3 from "@/public/assets/aw3.png";
import aw4 from "@/public/assets/aw4.png";
import aw5 from "@/public/assets/aw5.png";
import aw6 from "@/public/assets/aw6.png";
import aw7 from "@/public/assets/aw7.png";
import aw8 from "@/public/assets/aw8.png";
import aw9 from "@/public/assets/aw9.png";
import aw11 from "@/public/assets/aw11.png";
import aw12 from "@/public/assets/aw12.png";
import aw13 from "@/public/assets/aw13.png";
import aw14 from "@/public/assets/aw14.png";
import aw15 from "@/public/assets/aw15.png";
import aw16 from "@/public/assets/aw16.png";
import aw17 from "@/public/assets/aw17.png";
import Image from "next/image";

const images = [
  aw,
  aw1,
  aw2,
  aw3,
  aw4,
  aw5,
  aw6,
  aw7,
  aw8,
  aw9,
  aw11,
  aw12,
  aw13,
  aw14,
  aw15,
  aw16,
  aw17,
];
const ProfessionalA = () => {
  return (
    <div
      id='certification'
      className='text-center overflow-hidden w-full md:px-20 m-auto p-5 py-20 bg-white'
    >
      <h4 className='text-center text-[48px] leading-[56px] font-semibold'>
        Professional Association
      </h4>

      <div className='flex lg:grid min-w-max lg:grid-cols-5 gap-5 justify-center'>
        {images.map((img, i) => (
          <div
            className='w-[200px] relative  border-black h-[200px]'
            key={i.toString()}
          >
            <Image src={img} alt='cert' fill className='' objectFit='contain' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalA;
