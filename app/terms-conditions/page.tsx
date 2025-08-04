// app/terms/page.tsx
import React from "react";

const TermsPage = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-center mb-6">Terms & Conditions</h1>

      <ul className="space-y-4 text-gray-300 text-base leading-relaxed">
        <li>
          <strong>1. Booking Confirmation:</strong> A booking is considered
          confirmed only after receiving the initial booking money and
          completing the booking form.
        </li>
        <li>
          <strong>2. Payment Schedule:</strong> Buyers must follow the
          agreed-upon installment plan. Delays in payment may result in
          cancellation or penalties.
        </li>
        <li>
          <strong>3. Ownership Transfer:</strong> Ownership of the unit will be
          transferred upon full payment and after completing all necessary legal
          formalities.
        </li>
        <li>
          <strong>4. Price Adjustment:</strong> Prices may be revised due to
          changes in material cost, government fees, or project scope. Buyers
          will be notified in advance.
        </li>
        <li>
          <strong>5. Cancellations & Refunds:</strong> In case of booking
          cancellation, a service charge will be deducted. Refunds will follow
          company policy.
        </li>
        <li>
          <strong>6. Project Timeline:</strong> While we aim to deliver on time,
          unexpected delays due to legal, environmental, or labor issues may
          occur. We appreciate your patience.
        </li>
      </ul>
    </main>
  );
};

export default TermsPage;
