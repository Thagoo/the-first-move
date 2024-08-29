"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import EventForm from "./layout/form";

export default function FloatingButton() {
  const [showButton, setShowButton] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Show button after scrolling down 300px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {" "}
      <Button
        onClick={() => setShowForm(true)}
        style={{ backgroundColor: "white" }}
        variant="secondary"
        className={` px-8 py-4 font-medium md:text-xl shadow-safari fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-200 rounded-full border-primary border ${
          showButton ? " opacity-100 fade-in-30" : "opacity-0"
        }`}
      >
        Plan with us!
      </Button>
      <EventForm
        showTrigger={false}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </div>
  );
}
