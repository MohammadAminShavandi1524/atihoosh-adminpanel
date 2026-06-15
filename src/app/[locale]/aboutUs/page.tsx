"use client";

import ExpSection from "@/components/aboutUs/ExpSection";
import OurTeamBox from "@/components/aboutUs/OurTeamBox";

import OurValuesBox from "@/components/aboutUs/OurValuesBox";
import TimeLine from "@/components/aboutUs/TimeLine";
import { BadgeCheck, Lightbulb, Users } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";

interface pageProps {}

const page = ({}: pageProps) => {
  const locale = useLocale();

  return (
    <div className="">
      <section className="flex flex-col">
        {/* hero section */}

        <div className="w90 mt-[175px] mb-[75px] flex flex-col gap-y-[50px] text-center">
          <div className="text-[90px] font-medium">
            <span>We are</span>
            <span className="text-[#1e9dbd]"> Ati Hoosh</span>
          </div>
          <div className="text-2xl">
            A team of designers and developers who use AI to create better
            digital experiences.
          </div>
        </div>

        {/* experience */}
        <div className="my-10 border-y-1 border-y-[#32323261] py-25">
          <div className="w90 flex items-center justify-between px-30 2xl:px-40">
            {/* experience section */}
            <ExpSection
              number="+50"
              label="Successful project"
              topLineClassName="ms-1.5"
            />
            <ExpSection number="8" label="Team member" />
            <ExpSection
              number="+3"
              label="Years of experience"
              topLineClassName="ms-1.5"
            />
            <ExpSection number="24/7" label="Support" />
          </div>
        </div>
        {/* our story */}
        <div className="w90 my-15 grid h-100 grid-cols-2 px-30 2xl:px-40">
          <div className="flex flex-col pe-20 2xl:pe-25">
            <div className="text-custom-primary text-2xl">Our Story</div>
            <div className="mt-10 mb-12 text-5xl">Where did we start?</div>
            <div className="text-justify text-xl font-light text-[#8e8e8e]">
              Ati Housh started with a simple idea: creating digital products
              that are truly designed for people. We believe technology should
              serve humans.
            </div>
          </div>
          {/*  */}
          <div className="border-s-custom-primary flex flex-col gap-y-8 border-s pt-7">
            {/* timeLine */}
            <TimeLine
              year={2022}
              title="Company founded"
              description="Started with 3 people and a small office"
            />
            <TimeLine
              year={2024}
              title="First major product"
              description="Launching the AI platform"
            />
            <TimeLine
              year={2024}
              title="Team growth"
              description="Expanding to 8 expert members"
            />
          </div>
        </div>
      </section>

      <section className="relative my-15 flex h-120 w-full">
        {/* banner */}
        <div className="relative flex w-full flex-col">
          {/* image */}
          <div className="absolute top-0 h-120 w-full">
            <Image alt="AUbanner" src={"/AUbanner.png"} fill />
          </div>
          <div className="z-10 mx-auto flex h-full flex-col items-center justify-center gap-y-8 2xl:w-[60%]">
            {/* title */}
            <div className="text-[40px]">
              Making reinvention real for our clients
            </div>

            {/* description */}
            <div className="mx-auto text-center text-lg 2xl:w-[54%]">
              Reinvention Services brings together the full breadth of
              Accenture, enabling us to solve your most complex problems and
              deliver reinvention at greater scale and impact.
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        {/* Our values */}
        <div className="w90 flex flex-col 2xl:px-30">
          <div className="text-custom-primary mb-6 text-2xl">Our values</div>
          <div className="mb-10 text-[48px]">What makes us different</div>
          <div className="flex items-center justify-between gap-x-18">
            <OurValuesBox
              title="Innovation"
              description="We're always looking for creative and different solutions"
              Logo={Lightbulb}
            />

            <OurValuesBox
              title="Teamwork"
              description="We consider the customer's success as our own success"
              Logo={Users}
            />

            <OurValuesBox
              title="Quality"
              description="We never compromise on quality at any stage"
              Logo={BadgeCheck}
            />
          </div>
        </div>
        {/* our team */}

        <div className="mb-10 mt-20 border-y-1 border-y-[#32323261] py-25">
          <div className="w90 flex flex-col 2xl:px-30">
            <div className="text-custom-primary text-[22px]">our team</div>
            <div className="mb-[72px] text-[44px]">
              The people behind the project
            </div>
            {/* our team boxes */}
            <div className="grid grid-cols-4 gap-x-7 gap-y-14">
              <OurTeamBox
                EmployeeName="Masoud VZ"
                EmployeeStatus="Product Manager"
              />
              <OurTeamBox
                EmployeeName="Masoud VZ"
                EmployeeStatus="Product Manager"
              />
              <OurTeamBox
                EmployeeName="Masoud VZ"
                EmployeeStatus="Product Manager"
              />
              <OurTeamBox
                EmployeeName="Masoud VZ"
                EmployeeStatus="Product Manager"
              />
              <OurTeamBox
                EmployeeName="Masoud VZ"
                EmployeeStatus="Product Manager"
              />
              <OurTeamBox
                EmployeeName="Masoud VZ"
                EmployeeStatus="Product Manager"
              />
              <OurTeamBox
                EmployeeName="Masoud VZ"
                EmployeeStatus="Product Manager"
              />
              <OurTeamBox
                EmployeeName="Masoud VZ"
                EmployeeStatus="Product Manager"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
