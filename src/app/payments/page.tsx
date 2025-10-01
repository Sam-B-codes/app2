import { columns, type Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  const users = [
    "John Doe", "Jane Smith", "Mike Johnson", "Alice Brown", "Chris Lee",
    "Sophia Miller", "Daniel White", "Emma Davis", "David Clark", "Laura Wilson"
  ]

  // ✅ Generate 50 mock payments
  return Array.from({ length: 50 }, (_, i) => ({
    id: `PAY-${1000 + i}`,
    amount: Math.floor(Math.random() * 500) + 50,
    status: ["pending", "success", "failed"][Math.floor(Math.random() * 3)] as
      "pending" | "success" | "failed",
    username: users[i % users.length],
    email: `${users[i % users.length].toLowerCase().replace(" ", "")}@gmail.com`,
  }))
}

export default async function PaymentsPage() {
  const data = await getData()

  return (
    <div className="px-6 py-4">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold text-lg">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
