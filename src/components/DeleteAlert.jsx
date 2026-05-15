"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter  } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export function DeleteAlert({destination}) {
    const { _id, destinationName } = destination;
    const router = useRouter();

    const handleDelete = async() => {

        const {data:tokenData} = await authClient.token();

        const  res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            toast.error('Destination deleted successfully!');
            router.push('/destinations');
        }else {
            toast.warning('Failed to delete destination.');
        }
    }

    return (
        <AlertDialog>
            <Button variant='outline' className="flex items-center  border-red-300 rounded-md text-sm text-red-500 hover:bg-red-50 transition-colors">
                <MdDelete /> Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Destination
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}