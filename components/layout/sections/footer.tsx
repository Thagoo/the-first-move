import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      className=" bg-gradient-to-b from-transparent from-0% to-100% via-cyan-100"
    >
      <div className="conatiner mx-auto md:p-10 p-4 rounded-2xl">
        <div className="pb-4 md:pb-8">
          <h1 className="text-xl">Plan your dream event with us!</h1>
          <p>The best in class planning and execution experience guaranteed!</p>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-lg">Contact Us</h3>
            <div>
              <Link
                href="https://wa.link/oij5rd"
                className="opacity-60 hover:opacity-100"
              >
                hi@thefirstmove.in
              </Link>
            </div>

            <div>
              <Link
                href="https://wa.link/oij5rd"
                className="opacity-60 hover:opacity-100"
              >
                +91 63606 62716
              </Link>
            </div>
            <div>
              <Link
                href="https://wa.link/oij5rd"
                className="opacity-60 hover:opacity-100"
              >
                Dongle Desk Indiranagar Bangalore, Karnataka 560038
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 cursor-default">
            <h3 className="font-medium text-lg">Services</h3>
            <div>
              <p className="opacity-60 ">Wedding Planning</p>
            </div>

            <div>
              <p className="opacity-60 ">Proposal </p>
            </div>

            <div>
              <p className="opacity-60 ">Photography</p>
            </div>
            <div>
              <p className="opacity-60 ">Make Up Artists</p>
            </div>
            <div>
              <p className="opacity-60 ">Personal Shopper</p>
            </div>
            <div>
              <p className="opacity-60 ">Cocktail Events</p>
            </div>
            <div>
              <p className="opacity-60 ">Birthday Parties</p>
            </div>
            <div>
              <p className="opacity-60 "> Sit Down Dinners</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-lg">Help</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                About Us
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Blogs
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-lg">Socials</h3>
            <div>
              <Link
                href="https://www.instagram.com/thefirsttmove?igsh=MTFsYmR5a3VrY3k0aQ%3D%3D&utm_source=qr"
                className="opacity-60 hover:opacity-100"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="opacity-40">
          Disclaimer - The data you submit will be used by our team to contact
          you and help you plan your celebration
          {/* <h3 className="">
            &copy; 2024 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/leoMirandaa"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Leo Miranda
            </Link>
          </h3> */}
        </section>
      </div>
    </footer>
  );
};
