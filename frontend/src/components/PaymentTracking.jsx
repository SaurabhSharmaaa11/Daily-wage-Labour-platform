function PaymentTracking() {
  const totalWage = 16800;
  const paidAmount = 10000;

  const pendingAmount = totalWage - paidAmount;

  return (
    <div>
      <h1>Payment Tracking</h1>

      <h2>Total Wage: ₹{totalWage}</h2>

      <h2>Paid Amount: ₹{paidAmount}</h2>

      <h2>Pending Amount: ₹{pendingAmount}</h2>
    </div>
  );
}

export default PaymentTracking;