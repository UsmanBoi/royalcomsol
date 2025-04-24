import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/app/components/ui/RichText";
import Bounded from "@/app/components/Bounded";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return slice.variation === "aboutSelf" ? (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[37rem] w-full flex-col items-center justify-center bg-myblack-150 px-4 py-8 text-mywhite-50 sm:py-16 md:px-6 lg:px-12 xl:px-16 2xl:py-[4.5rem]"
    >
      <div className="relative grid h-full w-full gap-x-32 gap-y-10 lg:grid-cols-[1fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20 3xl:max-w-screen-2xl">
        <div className="flex h-full w-full flex-col gap-8">
          <h1
            className={`w-fit text-start text-3xl font-extralight opacity-40 lg:text-4xl 2xl:text-5xl`}
            style={{ wordSpacing: "0.1em" }}
          >
            About Us
          </h1>
          <div className="relative h-[25rem] w-full sm:h-full max-lg:max-w-96">
            <PrismicNextImage
              field={slice.primary.about_image}
              alt=""
              className="h-[25rem] rounded object-cover object-center sm:h-[28rem]"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-500 max-lg:hidden"></div>
        <div className="relative flex h-full flex-col p-4 sm:p-8 md:p-12 lg:flex-row lg:p-20 xl:p-48">
          {/* TEXT CONTAINER */}
          <div className="flex h-1/4 w-full items-center justify-center lg:h-full lg:w-1/2">
            {/* {text.split("").map((letter, index) => (
              <span
                className="text-6xl"
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.01 }}
                transition={{
                  duration: 3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))} */}
          </div>
          {/* FORM CONTAINER */}
          <form
            onSubmit={undefined}
            className="xl:[40%] xl:right-18 flex h-3/4 flex-col justify-center gap-8 rounded-lg bg-red-50 px-16 py-16 text-base font-medium text-gray-800 lg:absolute lg:right-12 lg:top-0 lg:h-full lg:w-[45%] lg:px-20 lg:py-28 2xl:right-32 2xl:w-[35%]"
          >
            <h2 className="text-lg">Dear Usman,</h2>
            <textarea
              name="user_message"
              rows={6}
              className="resize-none border-b-2 border-b-black bg-transparent outline-none"
            />
            <p>My mail address is</p>
            <input
              name="user_email"
              type="text"
              className="border-b-2 border-b-black bg-transparent outline-none"
            />
            <p>Regards</p>
            <button className="w-full rounded bg-purple-200 p-4 font-semibold text-gray-600">
              Send
            </button>

            <span className="text-center font-semibold text-green-500">
              Your message has been sent successfully. 🎊
            </span>

            <span className="text-center font-semibold text-red-500">
              Something went wrong
            </span>
          </form>
        </div>
      </div>
    </Bounded>
  ) : slice.variation === "default" ? (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[37rem] w-full flex-col items-center justify-center bg-myblack-150 px-4 py-8 text-mywhite-50 sm:py-16 md:px-6 lg:px-12 xl:px-16 2xl:py-[4.5rem]"
    >
      <div className="relative grid h-full w-full gap-x-32 gap-y-10 lg:grid-cols-[1fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20 3xl:max-w-screen-2xl">
        <div className="flex h-full w-full flex-col gap-8">
          <h1
            className={`w-fit text-start text-3xl font-extralight opacity-40 lg:text-4xl 2xl:text-5xl`}
            style={{ wordSpacing: "0.1em" }}
          >
            About Us
          </h1>
          <div className="relative h-[25rem] w-full sm:h-full max-lg:max-w-96">
            <PrismicNextImage
              field={slice.primary.about_image}
              alt=""
              className="h-[25rem] rounded object-cover object-center sm:h-[28rem]"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-500 max-lg:hidden"></div>

        <div className="flex h-full max-w-lg flex-col gap-3 pl-4 text-sm font-light sm:place-self-end md:text-base lg:max-w-3xl lg:place-self-start max-sm:py-6">
          <RichText field={slice.primary.about_content} />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default About;
