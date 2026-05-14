"use server"
import { revalidatePath } from "next/cache";

export const cancelBooking = async (bookingId) => {
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    });
    const data = await res.json();
    revalidatePath('/my-bookings');
    return data;
}