"use client";
import React, { useEffect, useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { eventBooking } from "@/lib/action";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import WhatsAppButton from "../ui/whatsapp-button";

const formSchema = z.object({
  name: z.string().min(2, "Please enter a valid name").max(50),
  phone: z
    .string()
    .min(10, "Please enter a valid number")
    .max(10, "Please enter a valid number")
    .regex(/^[0-9]+$/, "Please enter a valid number"),
  email: z.string().email(),
  dateOfEvent: z.date(),
  city: z.string().min(3, "Please enter a valid city").max(50),
  event: z.string().min(3, "Please enter a valid event").max(50),
  eventOther: z.string(),
});

const supportedEvents = [
  "Wedding Planning",
  "Proposal Planning",
  "Photography",
  "Make Up Artists",
  "Personal Shopper",
  "Invitation/Guest Listing",
  "Other",
];

interface EventFormProps {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  showTrigger: Boolean;
  toggleTitle: String;
}

export default function EventForm({
  showForm,
  setShowForm,
  showTrigger,
  toggleTitle,
}: EventFormProps) {
  const [alertOpen, setAlertOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef(null);

  const [showButton, setShowButton] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      email: "",
      event: "",
      eventOther: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(true);
    if (values.event == "Other") {
      if (values.eventOther.length < 4) {
        form.setError("eventOther", {
          type: "manual",
          message: "Please enter valid event name",
        });
      }

      values.event = values.eventOther;
    }
    const data = {
      ...values,
      dateOfEntry: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    const result = await eventBooking(data);

    if (result?.error) {
      setLoading(false);
      form.setError(result?.error?.field, {
        type: "manual",
        message: result?.error?.message,
      });
    } else {
      dialogRef?.current.click();
      setAlertOpen(true);

      setLoading(false);
    }
  };

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
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader className="flex flex-col items-center">
            <AlertDialogTitle>
              Success! Thank you for sending your details!
            </AlertDialogTitle>
            <AlertDialogDescription>
              Our celebration experts will get in touch with you within 24
              hours!
            </AlertDialogDescription>
            <WhatsAppButton />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Thanks</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog open={showForm} onOpenChange={setShowForm}>
        {showTrigger && (
          <DialogTrigger asChild className="max-w-md mx-auto flex">
            <Button
              variant="secondary"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:shadow-xl duration-200 rounded-full border-primary border  "
            >
              {toggleTitle}
            </Button>
          </DialogTrigger>
        )}
        {!showTrigger && (
          <DialogTrigger asChild>
            <Button
              style={{ backgroundColor: "white" }}
              variant="secondary"
              className={` px-8 py-4 font-medium md:text-xl shadow-safari fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-200 rounded-full border-primary border ${
                showButton ? " opacity-100 fade-in-30" : "opacity-0"
              }`}
            >
              Plan with us!
            </Button>
          </DialogTrigger>
        )}
        <DialogContent className="px-4">
          <DialogHeader>
            <DialogTitle>Get a customized quote from us!</DialogTitle>
            <DialogDescription>
              Share a few details and our celebrations experts will contact you
              within 24 hours!
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter Your Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <div className="flex gap-3">
                    {" "}
                    <div
                      className={cn(
                        " flex gap-1 rounded-e-none rounded-s-lg h-10 rounded-md bg-background px-3 py-2 border "
                      )}
                    >
                      +91
                    </div>
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfEvent"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick event date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="center">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                    {/* <FormDescription>
                  The date on which the event is Organized
                </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter City" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="event"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Event Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {supportedEvents.map((event, i) => (
                          <SelectItem key={i} value={event}>
                            {event}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("event") == "Other" && (
                <FormField
                  control={form.control}
                  name="eventOther"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter Event Type" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <DialogClose className="invisible" ref={dialogRef}></DialogClose>
              <Button
                type="submit"
                variant="outline"
                className={`mx-auto w-full `}
                disabled={!form.formState.isValid || loading}
              >
                {loading ? (
                  <span className="animate-spin text-primary/50">
                    <Loader2 size={18} />
                  </span>
                ) : (
                  <span>Submit</span>
                )}
              </Button>
            </form>
          </Form>
          <DialogFooter className=" max-w-md mx-auto max-h-12">
            <Image
              src={"/tfm-logo.svg"}
              width={100}
              height={50}
              alt="logo"
              priority
              quality={100}
            />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
