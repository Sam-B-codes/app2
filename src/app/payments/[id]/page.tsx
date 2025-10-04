type Props = {
  params: { id: string }
}

export default function PaymentDetailsPage({ params }: Props) {
  const { id } = params

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Payment Details</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Status:</strong> success</p>
      <p><strong>Amount:</strong> $200</p>
      <p><strong>User:</strong> John Doe</p>
    </div>
  )
}
