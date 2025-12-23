import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuMenu } from "react-icons/lu";

export function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent cursor-pointer" variant="default">
          <LuMenu className="w-7 h-7" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="w-full h-full border-none! bg-transparent backdrop-blur-sm">
        <SheetHeader>
          <SheetTitle className="text-white">Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4"></div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
