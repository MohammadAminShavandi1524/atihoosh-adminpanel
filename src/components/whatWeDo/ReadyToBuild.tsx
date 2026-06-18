"use client";

interface ReadyToBuildProps {}

const ReadyToBuild = ({}: ReadyToBuildProps) => {
  return (
    <section className="w-full border-y-1 border-y-[#131313] pt-24 pb-18">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <h2 className="mb-6 font-serif text-5xl text-white md:text-[65px]">
          Ready to Build Something?
        </h2>

        <p className="mt-8 mb-6 max-w-[800px] text-lg text-[#ffffff73] md:text-2xl">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>

        <div className="mt-14 flex flex-col gap-x-6 sm:flex-row">
          <button className="bg-custom-primary cursor-pointer rounded-xl px-10 py-4 text-lg font-semibold text-[#0b0f14] transition">
            Start a Project
          </button>

          <button className="cursor-pointer rounded-xl border-1 border-[#ffffff73] px-10 py-4 text-lg font-semibold text-[#ffffff73] transition">
            See Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBuild;
