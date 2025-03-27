import React from 'react';
const BookingSummary = ({ car, hotel, totalPrice }) => {
 
  return ( 
  <div>
  <div> Booking Summary Components</div>
    <div className="p-4 border rounded mt-4">
      <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
      <div>
        <p><strong>Car:</strong> {car?.name}</p>
        <p><strong>Price per day:</strong> ${car?.price}</p>
      </div>

      <div className="mt-4">
        <p><strong>Hotel:</strong> {hotel?.name}</p>
        <p><strong>Price per night:</strong> ${hotel?.price}</p>
      </div>

      <div className="mt-4">
        <p><strong>Total Price:</strong> ${totalPrice}</p>
      </div>
    </div>
    </div>
  
  );
}
export default BookingSummary;