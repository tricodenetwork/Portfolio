import { volunteers } from "./datas";

export default function Volunteer() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      {/* <Navbar /> */}
      <section
        id='volunteer_experience'
        className='flex w-full mt-10 px-3 md:px-[5rem] py-[60px] bg-white flex-col justify-center items-center inline-flex'
      >
        <div className="self-stretch flex-col justify-start items-center gap-5 md:gap-[50px] inline-flex">
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="text-slate-800 text-[26px] md:text-[52px] font-semibold font-['Poppins'] leading-[56px]">Volunteer Experience</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-start gap-3">
            {volunteers.map(({ id, title, subtitle }) => {
              return (
                <div key={id} className="w-full h-[240px] py-8 pr-3 sm:pr-8 bg-white border border-l-amber-400 border-solid border-2 rounded-[10px] shadow justify-start items-center gap-4 flex">
                  <div className="flex-col flex pl-6 gap-4">
                    <div className="self-stretch text-slate-800  text-xl md:text-[20px] font-semibold font-['Work Sans'] leading-7">
                      {title}
                    </div>
                    <div className="self-stretch text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
                      {subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
