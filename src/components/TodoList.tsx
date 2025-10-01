"use client"



import { CalendarIcon, Divide } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
// import { format } from "path"; 
import { Span } from "next/dist/trace";
import { format } from "date-fns";

const TodoList = () => {

  const [date,setDate] = useState<Date | undefined>(new Date()) 
  const [open,setOpen] = useState(false)
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button className="w-full">
      <CalendarIcon/>
      {date ? format(date,"PPP") : <span>Pick a date</span> }
    </Button>
  </PopoverTrigger>
   <PopoverContent>

  <Calendar
  mode="single"
  selected={date}
  onSelect={(date)=>{
    setDate(date);
    setOpen(false);
  }}
  className="rounded-lg border"
/>

  
  </PopoverContent>
</Popover>
      {/* List  */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
         <div className="flex flex-col gap-4">
        <Card>
          <div className="flex items-center gap-4">
            <Checkbox id="item1" />
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
            <Checkbox id="item1" />
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
            <Checkbox id="item1" />
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
            <Checkbox id="item1" />
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
