import AppBarChart from "@/components/AppBarChart";
import CardList from "@/components/CardList";
import { ChartAreaGradient } from "@/components/ChartAreaGradient";
import { ChartPieDonutText } from "@/components/ChartPieDonutText";
import TodoList from "@/components/TodoList";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      {/* Charts & Widgets */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-2">
        <AppBarChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <ChartPieDonutText />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-2">
        <ChartAreaGradient />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </div>

      {/* ✅ Payments + Users Section (Side by Side with Flex) */}
      <div className="flex flex-col lg:flex-row gap-6 lg:col-span-2 xl:col-span-4">
        {/* Payments Section */}
        <div className="bg-primary-foreground p-6 rounded-lg flex-1">
          <h2 className="text-lg font-semibold mb-2">Payments</h2>
          <p className="text-sm text-muted-foreground mb-4">
            View and manage all payment records in one place.
          </p>
          <Link href="/payments">
            <Button className="w-fit">Go to Payments</Button>
          </Link>
        </div>

        {/* Users Section */}
        <div className="bg-primary-foreground p-6 rounded-lg flex-1">
          <h1 className="text-lg font-semibold mb-2">Users</h1>
          <p className="text-sm text-muted-foreground mb-4">
            View and manage all user profiles and details.
          </p>
          <Link href="/users">
            <Button className="w-fit">Go to Users</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


