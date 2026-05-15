"use server"
// import { revalidatePath } from "next/cache";

export const cancelBooking = async (bookingId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    });
    const data = await res.json();
    // revalidatePath('/my-bookings');
    console.log(data);
    
    return data;
}