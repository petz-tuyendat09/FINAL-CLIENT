"use client";

import Image from "next/image";
import { useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Tabs,
    Tab,
    Input,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import NormalTransitionLink from "@/components/ui/NormalTransitionLink";
import formatMoney from "@/utils/formatMoney";

// Define type for booking items
type BookingItem = {
    bookingName: string;
    customerName: string;
    checkInDate: string;
    totalPrice: number;
    status: string;
};

// Define table columns
const columns = [
    { key: "bookingName", label: "TÊN DỊCH VỤ" },
    { key: "customerName", label: "TÊN KHÁCH HÀNG" },
    { key: "checkInDate", label: "NGÀY ĐẾN" },
    { key: "totalPrice", label: "TỔNG TIỀN" },
    { key: "status", label: "TRẠNG THÁI" },
    { key: "action", label: "ACTION" },
];

// Hardcoded booking data
const bookingData: BookingItem[] = [
    {
        bookingName: "Dịch vụ 1",
        customerName: "Nguyễn Phúc Thiện",
        checkInDate: "26-10-2024",
        totalPrice: 5000000,
        status: "Confirmed",
    },
    {
        bookingName: "Dịch vụ 2",
        customerName: "Trần Thị B",
        checkInDate: "27-10-2024",
        totalPrice: 3000000,
        status: "Pending",
    },
    {
        bookingName: "Dịch vụ 3",
        customerName: "Trần Thị B",
        checkInDate: "28-10-2024",
        totalPrice: 3000000,
        status: "Pending",
    },
    {
        bookingName: "Dịch vụ 4",
        customerName: "Trần Thị B",
        checkInDate: "29-10-2024",
        totalPrice: 3000000,
        status: "Pending",
    },
];

export default function BookingTable() {
    return (
        <div className="mt-10">
            <Table
                aria-label="Booking Table"
                bottomContent={
                    <div className="flex w-full justify-center">
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="secondary"
                            total={Math.ceil(bookingData.length / 10)}
                        />
                    </div>
                }
            >
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={bookingData}>
                    {(item: BookingItem) => (
                        <TableRow key={item.bookingName}>
                            {columns.map((column) => {
                                const columnKey = column.key;
                                if (columnKey === "action") {
                                    return (
                                        <TableCell key={columnKey}>
                                            <button>
                                                <Icon className="size-6" icon="mdi:trash" />
                                            </button>
                                            <NormalTransitionLink href={`/bookings/edit/${item.bookingName}`}>
                                                <Icon className="size-6" icon="mynaui:edit" />
                                            </NormalTransitionLink>
                                        </TableCell>
                                    );
                                } else if (columnKey === "totalPrice") {
                                    return <TableCell key={columnKey}>{formatMoney(item.totalPrice)}</TableCell>;
                                } else {
                                    return (
                                        <TableCell key={columnKey as keyof BookingItem}>
                                            {item[columnKey as keyof BookingItem]}
                                        </TableCell>
                                    );
                                }
                            })}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
