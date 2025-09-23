"use client";


import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";

const popularContent = [
  {
    id: 1,
    title: "Coding",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb",
    count: 1500,
  },
  {
    id: 2,
    title: "Image Generation with AI",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb",
    count: 1200,
  },
  {
    id: 3,
    title: "UI/UX Design",
    badge: "Design",
    image:
      "https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb",
    count: 980,
  },
  {
    id: 4,
    title: "Data Analytics",
    badge: "Analytics",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb",
    count: 1120,
  },
  {
    id: 5,
    title: "Cloud Computing",
    badge: "Cloud",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb",
    count: 1340,
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 1000,
  },
  {
    id: 3,
    title: "New Order",
    badge: "Mike Johnson",
    image:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 800,
  },
  {
    id: 4,
    title: "Refund Issued",
    badge: "Sarah Lee",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 600,
  },
  {
    id: 5,
    title: "License Upgrade",
    badge: "David Brown",
    image:
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 1200,
  },
];

export { popularContent, latestTransactions };

const CardList = ({ title }: { title: string }) => {
  const list = title === "Popular Content" ? popularContent : latestTransactions;

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>

      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id} className="flex-row items-center justify-center gap-4 p-4">
            <div className="w-12 h-12 relative overflow-hidden rounded-sm flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <CardContent className="p-0">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
                <p className="text-xs font-medium">{item.badge}</p>
                <Badge variant="outline">Badge</Badge>
              </CardContent>
            </div>

            <CardFooter className="p-0 text-sm font-semibold">
              {(item.count / 1000).toFixed(1)}k
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
