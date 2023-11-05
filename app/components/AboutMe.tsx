import Image from "next/image"
import Hero from "@/public/assets/hero2.png";







const AboutMe = () =>{



    return (
        <section className='flex flex-col justify-around items-center md:flex-row py-10 bg-[#E6E8EB] md:px-10'>
            <Image src={Hero } alt="" />
            
            <div className="md:w-1/2 p-5">
                <h4 className=" font-bold text-[52px] mb-5">About Me</h4>
                <p>Dr. Malik is a chartered consultant, member of the highest body of the International Consultancy Group (CMC Global), and a Distinguished Fellow at the National level with over fifteen years of leadership experience. He is a member of the IEEE and Government Blockchain Association, promoting, researching, and creating Blockchain technology-based solutions to problems faced by government entities. Furthermore, Dr. Malik has developed and implemented a win-win project partnership with the private, state, and national government agencies that produce a safer environment and sustainable development, accomplishing a twenty-five percent return on government. </p>
                <button className="font-bold capitalize mt-20 w-full text-end">Read more</button>
            </div>
        </section>
    )
}
export default AboutMe
