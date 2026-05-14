"use client"
import { Button, Card, DateField, Label, Separator } from "@heroui/react";
import { Calendar } from "@gravity-ui/icons";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log(user);

    const [departureDate, setDepartureDate] = useState(null)
    // console.log(new Date(departureDate));


    const { price, _id, destinationName, imageUrl, country } = destination;
    // console.log(price.toLocaleString(),"typeof" ,typeof(price.toLocaleString()));

    //     const formattedDate = new Date(departureDate).toLocaleDateString('en-US', {
    //     month: '2-digit',
    //     day: '2-digit',
    //     year: 'numeric',
    // });

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)
        }
        // console.log(bookingData);
        try {
            const res = await fetch('http://localhost:5000/booking', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(bookingData)
            });
            const data = await res.json();
            // console.log(data);
            toast.success('Booking Successful!')
        } catch (error) {
            toast.error(error.message)
        }
    }


    return (
        <div className="w-full lg:w-80 shrink-0">
            <Card className="border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-20">

                <p className="text-sm text-gray-500 mb-1">Starting from</p>

                {price && (
                    <>
                        <p className="text-4xl font-bold text-cyan-500 mb-1">
                            ${price.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-400 mb-4">per person</p>
                    </>
                )}

                <Separator className="mb-4" />

                <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                    <Label>Date</Label>
                    <DateField.Group>
                        <DateField.Prefix>
                            <Calendar className="size-4 text-muted" />
                        </DateField.Prefix>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>

                <Button
                    onClick={handleBooking}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg"
                >
                    Book Now →
                </Button>

            </Card>
        </div>
    );
};

export default BookingCard;