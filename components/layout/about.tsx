import React from "react";
import { Divider } from "../ui/divider";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="gap-8 mx-auto py-10">
      <div className="container mx-auto px-4 md:max-w-screen-xl">
        {/* About Us Section */}
        <div className="bg-gray-50 text-gray-800 font-sans">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* About Us Section */}
            <section className="mb-12 text-center">
              <div className=" flex justify-center items-center gap-2 md:gap-4">
                <Image
                  width={0}
                  height={0}
                  className="md:w-20 w-12 h-auto"
                  src={"/icons/divider-bottom.svg"}
                  alt="dashboard"
                  priority
                />
                <h1 className=" md:text-4xl text-center font-semiboldZzzz text-nowrap text-4xl sm:text-5xl font-semibold mb-6 border-b-2 border-teal-500 pb-2 inline-block">
                  About Us
                </h1>

                <Image
                  width={1000}
                  height={1000}
                  className="md:w-20 w-12 h-auto scale-x-[-1]"
                  src={"/icons/divider-bottom.svg"}
                  alt="dashboard"
                />
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-start">
                Welcome to{" "}
                <strong className="font-medium text-teal-600">
                  The First Move
                </strong>
                , your premier destination for modern, sustainable event
                planning. As a vibrant and innovative team, we specialize in
                curating unforgettable experiences for life’s most significant
                moments. From proposals and weddings to birthdays and beyond,
                our goal is to make your vision come to life while staying true
                to our commitment to sustainability and modern design.
              </p>
            </section>

            {/* Who We Are Section */}
            <section className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                At{" "}
                <strong className="font-medium text-teal-600">
                  The First Move
                </strong>
                , we are passionate about creating memorable events that not
                only celebrate life&quot;s milestones but also respect our
                planet. Our team of skilled event planners is dedicated to
                crafting personalized, eco-friendly, and stylish events that
                stand out in today’s fast-paced world. We believe that every
                event should reflect the unique personality of our clients while
                minimizing its environmental impact.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mt-4">
                Our team consists of dynamic, young professionals who bring a
                fresh perspective and innovative ideas to the table. With a keen
                eye for detail and a love for modern aesthetics, we ensure that
                every event is not only beautiful but also functional and
                sustainable.
              </p>
            </section>

            {/* What We Do Section */}
            <section className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                What We Do
              </h2>
              <div className="space-y-8">
                <div className="p-4 sm:p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Modern Event Planning
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    In the world of event planning, staying ahead of trends is
                    essential. At{" "}
                    <strong className="font-medium text-teal-600">
                      The First Move
                    </strong>
                    , we excel in modern event planning, blending contemporary
                    design with practical solutions to create events that are
                    both stylish and effective. Whether you&quot;re dreaming of
                    a chic urban wedding, a sophisticated birthday celebration,
                    or a proposal that will leave everyone in awe, we have the
                    expertise to bring your vision to life.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Sustainable Event Solutions
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    Sustainability is at the heart of everything we do. As
                    leading sustainable event planners, we are committed to
                    reducing the environmental footprint of our events. From
                    eco-friendly decor and waste reduction to partnering with
                    sustainable vendors, we ensure that your event is as green
                    as it is gorgeous. Our goal is to create beautiful,
                    impactful events that align with your values and contribute
                    to a healthier planet.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Proposal Planning
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    A proposal is one of the most cherished moments in a
                    couple&quot;s life, and we understand the importance of
                    making it unforgettable. Our expert proposal planners work
                    closely with you to design a personalized, memorable
                    proposal that reflects your unique love story. Whether you
                    envision an intimate beachside proposal or an elaborate
                    surprise party, we handle every detail with care and
                    creativity.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Wedding Planning
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    Your wedding day is one of the most significant events of
                    your life, and we’re here to make sure it’s everything
                    you’ve ever dreamed of. As experienced wedding planners, we
                    offer a range of services to ensure that your big day is
                    seamless, beautiful, and stress-free. From venue selection
                    and theme development to vendor coordination and day-of
                    management, we take care of all the details so you can focus
                    on celebrating your love.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Birthday Planning
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    Whether it’s a milestone birthday or just a special
                    celebration, we bring a touch of magic to every birthday
                    party we plan. Our team excels in designing birthday events
                    that are fun, unique, and tailored to your preferences. From
                    themed parties and entertainment to custom decorations and
                    personalized touches, we ensure that your birthday bash is
                    one for the books.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-8">
                <div className="p-4 sm:p-6 bg-teal-50 shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Personalized Service
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    At{" "}
                    <strong className="font-medium text-teal-600">
                      The First Move
                    </strong>
                    , we believe that no two events are the same. That’s why we
                    offer personalized planning services to match your specific
                    needs and preferences. Our team takes the time to understand
                    your vision, ensuring that every element of your event is
                    customized to reflect your personality and style.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-teal-50 shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Expertise and Experience
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    With years of experience in the event planning industry, our
                    team has honed the skills necessary to handle events of all
                    sizes and complexities. Our expertise in modern and
                    sustainable event planning allows us to deliver exceptional
                    results, no matter how big or small your event may be.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-teal-50 shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Attention to Detail
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    We pride ourselves on our meticulous attention to detail.
                    From the initial consultation to the final execution, we
                    manage every aspect of your event with precision and care.
                    Our goal is to ensure that every detail aligns with your
                    vision and exceeds your expectations.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-teal-50 shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Commitment to Sustainability
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    Our dedication to sustainability sets us apart. We are
                    committed to integrating eco-friendly practices into every
                    event we plan. By choosing{" "}
                    <strong className="font-medium text-teal-600">
                      The First Move
                    </strong>
                    , you’re not only making a choice for a beautifully designed
                    event but also contributing to a more sustainable future.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Process Section */}
            <section className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                Our Process
              </h2>
              <div className="space-y-8">
                <div className="p-4 sm:p-6 bg-gray-100 shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Consultation
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    Our journey together begins with a detailed consultation. We
                    take the time to understand your vision, preferences, and
                    goals for your event. This initial meeting helps us create a
                    customized plan that aligns with your expectations and
                    budget.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-gray-100 shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Planning and Design
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    Once we have a clear understanding of your needs, we begin
                    the planning and design phase. Our team develops a
                    comprehensive plan, including venue selection, decor,
                    catering, entertainment, and more. We focus on creating a
                    cohesive design that reflects your style while incorporating
                    sustainable practices.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-gray-100 shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Execution
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    On the day of your event, our team is on-site to oversee
                    every detail. We manage logistics, coordinate with vendors,
                    and ensure that everything runs smoothly. Our goal is to
                    provide you with a stress-free experience so you can enjoy
                    your special day.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-gray-100 shadow-lg rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-medium text-teal-600">
                    Post-Event Follow-Up
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                    After your event, we conduct a thorough follow-up to ensure
                    that everything met your expectations. We value your
                    feedback and use it to continually improve our services.
                    Your satisfaction is our top priority, and we’re always here
                    to assist with any post-event needs.
                  </p>
                </div>
              </div>
            </section>

            {/* Get in Touch Section */}
            <section>
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Ready to plan an unforgettable event with a modern and
                sustainable twist?{" "}
                <Link
                  href={"https://wa.link/oij5rd"}
                  className="text-blue-500 hover:underline"
                >
                  Contact
                </Link>{" "}
                us today to schedule your consultation and take the first step
                towards creating a memorable experience. At{" "}
                <strong className="font-medium text-teal-600">
                  The First Move
                </strong>
                , we’re excited to bring your vision to life and make your event
                truly special.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Divider />
      </div>
    </div>
  );
}
