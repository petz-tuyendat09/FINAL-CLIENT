import TableBooking from "./TableBooking/TableBooking"
import TableOrder from "./TableOrder/TableOrder"

export default function Tables() {
    return (
        <>
            <div className="">
                <TableBooking />
                <TableOrder />
            </div>
        </>
    )
}