import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-10 sm:py-32">
      <div className="md:p-10 p-4 bg-card border border-secondary rounded-2xl">
        {/* <div className="pb-4">
          <h1 className="text-xl">Plan your dream event with us!</h1>
          <p>The best in class planning and execution experience guaranteed!</p>
        </div> */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <h3 className="text-2xl">TheFirstMove</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link
                href="mailto:hi@thefirstmove.in"
                className="opacity-60 hover:opacity-100"
              >
                hi@thefirstmove.in
              </Link>
            </div>

            <div>
              <Link
                href="tele:+916360662716"
                className="opacity-60 hover:opacity-100"
              >
                +91 63606 62716
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Services</h3>
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
            <h3 className="font-bold text-lg">Help</h3>
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
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link
                href="@thefirsttmove.in"
                className="opacity-60 hover:opacity-100"
              >
                Instragram
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
