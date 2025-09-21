import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  Plus,
  Projector,
  Search,
  Settings,
  User2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/"}>
                {/* <Image src= "/logo.svg" alt="logo" width={20} height={20}/>   */}
                {/* <Image src= "https://avatars.githubusercontent.com/u/1486366" alt="logo" width={20} height={20} />  */}

                {/* <AvatarImage src="https://github.com/shadcn.png" />  */}

                <Avatar  className="w-5 h-5">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/1486366"
                    alt="User avatar"
                  />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>

                <span>Lama image</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator/>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel> Projects </SidebarGroupLabel>
         <SidebarGroupAction>
          <Plus/> <span className="sr-only">Add Project</span>
         </SidebarGroupAction>
         <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
              <Link href={"/#"}>
              <Projector/>
              See All Projects
               </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
              <Link href={"/#"}>
              <Plus/>
              Add Project
               </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
         </SidebarGroupContent>
        </SidebarGroup>
            <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
            Collapsable Group 
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent> 
          <SidebarGroupLabel> Collapsible </SidebarGroupLabel>
         <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem> 
              <SidebarMenuButton asChild>
              <Link href={"/#"}>
              <Projector/>
              See All Projects
               </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
              <Link href={"/#"}>
              <Plus/>
              Add Project
               </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
         </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
          </Collapsible>

      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
export default AppSidebar;
