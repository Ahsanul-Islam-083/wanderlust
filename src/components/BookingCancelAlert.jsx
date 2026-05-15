"use client";

import { authClient } from "@/lib/auth-client";
import { cancelBooking } from "@/lib/bookings/actions";
import { AlertDialog, Button } from "@heroui/react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

export function BookingCancelAlert({ bookingId }) {
    const router = useRouter();

    const handleCancelBooking = async (id) => {

        const {data:tokenData} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`,
            }
        });
        const data = await res.json();
        if (res.ok) {
            toast.success("Booking cancelled")
            router.refresh();
        }
    };

    return (
        <AlertDialog>
            <Button
                variant="bordered"
                size="sm"
                className="border border-red-400 text-red-400 hover:bg-red-50 rounded-md"
            >
                <MdDelete size={15} />
                Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel Booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently cancel <strong>This Booking plan</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={()=>handleCancelBooking(bookingId)} slot="close" variant="danger">
                                Delete Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}