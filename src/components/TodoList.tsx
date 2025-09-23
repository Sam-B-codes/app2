import { Divide } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";

const TodoList = () => {

  const [date,setDate] = useState<Date>(new Date())
  return (
    <div className="">
      <Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
      {/* List  */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
         <div className="flex flex-col gap-4">
        <Card>
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorum placeat sapiente ab totam impedit illum eos rem corrupti
              tenetur error adipisci, iste facilis dolor tempore officiis.
            </label>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorum placeat sapiente ab totam impedit illum eos rem corrupti
              tenetur error adipisci, iste facilis dolor tempore officiis.
            </label>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorum placeat sapiente ab totam impedit illum eos rem corrupti
              tenetur error adipisci, iste facilis dolor tempore officiis.
            </label>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorum placeat sapiente ab totam impedit illum eos rem corrupti
              tenetur error adipisci, iste facilis dolor tempore officiis.
            </label>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorum placeat sapiente ab totam impedit illum eos rem corrupti
              tenetur error adipisci, iste facilis dolor tempore officiis.
            </label>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorum placeat sapiente ab totam impedit illum eos rem corrupti
              tenetur error adipisci, iste facilis dolor tempore officiis.
            </label>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorum placeat sapiente ab totam impedit illum eos rem corrupti
              tenetur error adipisci, iste facilis dolor tempore officiis.
            </label>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked/>
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorum placeat sapiente ab totam impedit illum eos rem corrupti
              tenetur error adipisci, iste facilis dolor tempore officiis.
            </label>
          </div>
        </Card>
        </div>
      </ScrollArea>
    </div>
  );
};
export default TodoList;
