// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PaymentDetailsPage({ params }: { params: any }) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Payment Details</h1>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Status:</strong> success
      </p>
      <p>
        <strong>Amount:</strong> $200
      </p>
      <p>
        <strong>User:</strong> John Doe
      </p>
    </div>
  );
}
