import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdSend } from 'react-icons/io';
const ContactMe = () => {
  return (
    <div id='contact' className=" mt-20 flex flex-col md:flex-row gap-4 justify-between p-10  bg-white w-full md:w-[80%] m-auto rounded-xl">
      <div className="w-full md:w-1/2">
        <h3 className="font-bold text-[52px] mb-10">Contact Me</h3>

        <div className="mb-5">
          There are many variations of passages of Lorem Ipsu available. but the
          majority have suffered alte.
        </div>
        <div className="flex gap-2 my-4">
          <div className="w-[40px] h-[40px] grid place-content-center ">
            <FaLocationDot size={30} />
          </div>
          <div>
            <p>Address:</p>
            <p className="font-bold"> Beverly Hills, CA, USA.</p>
          </div>
        </div>

        <div className="flex gap-2 my-4">
          <div className="w-[40px] h-[40px] grid place-content-center ">
            <AiOutlineMail size={30} />
          </div>
          <div>
            <p>Email:</p>
            <p className="font-bold">adavs1@yahoo.com</p>
          </div>
        </div>

        <div className="flex gap-2 my-4">
          <div className="w-[40px] h-[40px] grid place-content-center ">
            <BsTelephoneFill size={30} />
          </div>
          <div>
            <p>Phone:</p>
            <p className="font-bold">+1 949 372 9715</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="mb-5">
        There are many variations of passages of Lorem Ipsu available,
but the majority have suffered alte.
        </div>
        <div className="my-5">
                  <input placeholder="Name *" name="name" type="text" required
                      className="w-full outline-none border-b-2 border-b-gray-300  py-4 px-2" />
        </div>

        <div className="my-5">
                  <input placeholder="Name *" name="name" type="text" required
                      className="w-full outline-none border-b-2 border-b-gray-300  py-4 px-2" />
        </div>

        <div className="my-5">
                  <input placeholder="Name *" name="name" type="text" required
                      className="w-full outline-none border-b-2 border-b-gray-300  py-4 px-2" />
              </div>
              <div className="my-5">
                  <input placeholder="Name *" name="name" type="text" required
                      className="w-full outline-none border-b-2 border-b-gray-300  py-4 px-2" />
              </div>
              <button className="flex justify-around items-center text-white bg-[#132238] p-4 gap-3">
                  <span>Submit</span>
                  <IoMdSend size={30} />
              </button>
      </div>
    </div>
  );
};

export default ContactMe;
