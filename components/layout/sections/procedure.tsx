"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

type StepsData = {
  title: string;
  desc: string;
  id: number;
};
const stepsData: StepsData[] = [
  {
    title: "Connect with us ",
    desc: "Contact us via Instagram, WhatsApp or Call. Our celebration experts will understand your requirements  ",
    id: 1,
  },
  {
    title: "We will send a customized quote",
    desc: "Our  team of celebration experts will customize a quotation just for you as per your requirement and send it to you ",
    id: 2,
  },
  {
    title: "Approval and preparation",
    desc: "Once you are satisfied with the quote, you can send us an approval and we will start preparing for perfection!",
    id: 3,
  },
];
const ProcedureSection = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const steps = [1, 2, 3];

  const swiperRef = useRef();

  const onStepEnter = ({ data }) => {
    setStep(data);
    if (data > step) {
      swiperRef.current?.slideNext();
    } else if (data < step) {
      swiperRef.current?.slidePrev();
    }
  };

  const onStepExit = ({ direction, data }) => {
    if (direction === "up" && data === steps[0]) {
      setStep(1);
    }
  };

  const onStepProgress = ({ progress }) => {
    setProgress(progress);
  };

  //   useEffect(() => {
  //     if (data <= 10) {
  //       setImageSrc("/icons/C1.svg");
  //     } else if (data === 20) {
  //       swiperRef.current?.slideNext();
  //     } else if (data === 30) {
  //       setImageSrc("/icons/C3.svg");
  //     } else {
  //       setImageSrc(null); // Clear the image when data is outside the expected range
  //     }
  //   }, [data]);

  return (
    <div className="relative h-[300vh]">
      <div className="invisible h-[150vh] absolute flex flex-col jusitfy-between">
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
          progress
          onStepProgress={onStepProgress}
          offset="100px"
        >
          {steps.map((value) => (
            <Step data={value} key={value}>
              <div
                className={`h-full flex flex-col mx-auto border animate-in ease-in-out duration-150 ${
                  value == step ? "p-16" : "p-0"
                }`}
              >
                <p className="text-center text-lg m-0">step value: {value}</p>
                <p className="text-center text-lg m-0">
                  {Math.round(progress * 1000) / 10 + "%"}
                </p>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>

      <div className="sticky md:top-10 top-0 py-20 h-screen">
        <div className="flex flex-col gap-2 items-center px-5">
          <div className="w-full flex justify-center gap-2 md:gap-4 ">
            <Image
              width={0}
              height={0}
              className="md:w-20 w-12 h-auto"
              src={"/icons/divider-bottom.svg"}
              alt="dashboard"
            />
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-nowrap">
              Where to Start
            </h1>

            <Image
              width={0}
              height={0}
              className="md:w-20 w-12 h-auto scale-x-[-1]"
              src={"/icons/divider-bottom.svg"}
              alt="dashboard"
            />
          </div>
          <p className="md:w-1/2 mx-auto text-center text-muted-foreground">
            Booking your celebration was never this easy!
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-between justify-start md:items-start px-5 md:px-20 mt-2 md:mt-10 w-full md:gap-0 gap-6 md:min-h-screen">
          <div className="flex flex-col justify-center w-full">
            {stepsData.map((item, i) => (
              <section key={i} className=" flex gap-5 relative pb-10 md:pb-14 ">
                {i <= 1 && (
                  <div
                    className={`animate-in duration-200 ease-out absolute top-8 z-0 h-full left-4 md:left-6 w-0.5 ${
                      step >= item.id ? "bg-primary" : "bg-slate-200"
                    }`}
                    aria-hidden="true"
                  />
                )}
                <div className="z-40">
                  <div
                    className={`animate-in duration-200 rounded-full flex items-center justify-center md:h-12 md:w-12 h-8 w-8 ${
                      step >= item.id
                        ? "bg-primary font-medium"
                        : "bg-[#F7BBAA]"
                    } `}
                  >
                    <h1
                      className="animate-pulse md:text-4xl text-lg text-black self-center flex"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1
                    className={`transition-all transform-gpu ease-in-out duration-300  ${
                      step == item.id
                        ? "md:text-4xl text-2xl font-medium"
                        : "md:text-2xl text-xl"
                    }`}
                    style={{ transform: "translate3d(0, 0, 0)" }}
                  >
                    {item.title}
                  </h1>

                  {step == item.id && (
                    <p className="animate-in fade-in-20 animate-out leading-7 text-gray-900 md:text-lg">
                      {item.desc}
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>

          <div>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              noSwiping={true}
              direction={"vertical"}
              className="h-40 w-40 md:h-96 md:w-96 drop-shadow-xl"
            >
              <SwiperSlide className=" rounded-full swiper-no-swiping">
                {" "}
                <Image
                  src={"/icons/procedure/2.svg"}
                  alt="image 1"
                  width={0}
                  height={0}
                  className="h-auto w-full "
                />
              </SwiperSlide>

              <SwiperSlide className=" rounded-full swiper-no-swiping">
                {" "}
                <Image
                  src={"/icons/procedure/3.svg"}
                  alt="image 1"
                  width={0}
                  height={0}
                  className="h-auto w-full"
                />
              </SwiperSlide>
              <SwiperSlide className=" rounded-full swiper-no-swiping">
                {" "}
                <Image
                  src={"/icons/procedure/1.svg"}
                  alt="image 1"
                  width={0}
                  height={0}
                  className="h-auto w-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* <div className="h-[50vh]"></div> */}
    </div>
  );
};

export default ProcedureSection;
