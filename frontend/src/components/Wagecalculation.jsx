function WageCalculation() {
  const dailyWage = 800;
  const presentDays = 20;
  const halfDays = 2;

  const totalWage =
    (presentDays * dailyWage) +
    (halfDays * dailyWage) / 2;

  return (
    <div>
      <h1>Wage Calculation</h1>

      <h2>Daily Wage: ₹{dailyWage}</h2>

      <h2>Present Days: {presentDays}</h2>

      <h2>Half Days: {halfDays}</h2>

      <h2>Total Wage: ₹{totalWage}</h2>
    </div>
  );
}

export default WageCalculation;