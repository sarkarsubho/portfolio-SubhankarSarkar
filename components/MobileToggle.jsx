import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavbarMenu from "./navbar/NavbarMenu";
import { Button } from "@/components/ui/button";

const MobileToggle = () => {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-5 flex gap-0 w-[50%]">
        <div>
          <NavbarMenu cls="flex flex-col" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
