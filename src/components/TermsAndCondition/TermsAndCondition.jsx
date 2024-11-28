import React from 'react';
import Title from '../Title/Title';

const TermsAndConditions = () => {
  return (
    <>
    <Title title="Tearms and comditions" />
    <div className="bg-white-100 min-h-screen flex items-center justify-center p-1 md:p-9">
      <div className="p-3 md:p-6 rounded-lg shadow-lg">
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
          <p>Welcome to Bro Bikes. By using our website [] and services, you agree to comply with these terms and conditions. If you do not agree, please refrain from using our services.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Eligibility</h3>
          <p>To use our booking services, you must be at least 18 years old and hold a valid driver's license appropriate for the vehicle you wish to rent.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Booking Process</h3>
          <p>To book a vehicle, you must provide accurate personal and payment information. A reservation is only confirmed once you receive a confirmation email from us.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. Payment Terms</h3>
          <p>Payments can be made via credit/debit cards, online payment gateways. A deposit or full payment may be required at the time of booking.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">5. Rental Charges</h3>
          <p>Rental charges include the base rate, taxes, and any additional fees for extra services or equipment. All charges will be clearly outlined in your booking confirmation.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">6. Cancellation Policy</h3>
          <p>You may cancel your booking according to our cancellation policy. Cancellations made 24 hours before the rental start time may qualify for a full/partial refund.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">7. Refunds</h3>
          <p>Refunds, if applicable, will be processed according to our refund policy. The processing time for refunds may vary.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">8. Vehicle Use</h3>
          <p>Vehicles must be used in accordance with local laws and regulations. Unauthorized use, such as driving under the influence or using the vehicle for illegal activities, is prohibited.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">9. Damage and Maintenance</h3>
          <p>You are responsible for any damage caused to the vehicle during the rental period. Report any issues or damages to our support team immediately.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">10. Fuel Policy</h3>
          <p>The vehicle should be returned with the same amount of fuel as when it was picked up. Additional charges may apply if the vehicle is returned with less fuel.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">11. Insurance</h3>
          <p>Vehicles are covered by insurance as per our policy. Certain damages and liabilities may not be covered. Review our insurance policy for detailed information.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">12. Driver Requirements</h3>
          <p>Only authorized drivers listed in the booking are permitted to drive the vehicle. All drivers must present a valid driver's license upon vehicle pickup.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">13. Late Returns</h3>
          <p>Late returns may incur additional charges. If you anticipate a delay, please contact us as soon as possible.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">14. Privacy Policy</h3>
          <p>We collect, use, and protect your personal information as described in our Privacy Policy. By using our services, you consent to the collection and use of your data as outlined.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">15. Changes to Terms</h3>
          <p>We reserve the right to update or modify these terms and conditions at any time. Any changes will be posted on this page, and continued use of our services signifies acceptance of the updated terms.</p>
        </section>
      </div>
    </div>
    </>
    
  );
};

export default TermsAndConditions;
