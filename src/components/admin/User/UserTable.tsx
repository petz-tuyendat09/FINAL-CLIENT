import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
  SelectItem,
  Select,
} from "@nextui-org/react";

import { useUserContext } from "./_store/UserContext";
import { User, UserRole } from "@/types/User";
import { useSession } from "next-auth/react";

const columns = [
  {
    key: "username",
    label: "USERNAME",
  },
  {
    key: "displayName",
    label: "TÊN HIỂN THỊ",
  },
  {
    key: "userEmail",
    label: "EMAIL USER",
  },

  {
    key: "userRole",
    label: "ROLE",
  },

  {
    key: "userPoint",
    label: "ĐIỂM USER",
  },
];

export default function BookingsTable() {
  const { userList, handleSetPage, page, totalPages, handleChangeUserRole } =
    useUserContext();

  const formatUserId = (userId: string | null) => {
    if (!userId) return "Khách lẻ";
    return userId.slice(-3).toUpperCase();
  };

  const session = useSession();
  const userId = session.data?.user._id;

  return (
    <>
      <div className="mt-4">
        <Table
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                classNames={{
                  cursor: "bg-black",
                }}
                total={totalPages}
                onChange={(page) => handleSetPage(page)}
              />
            </div>
          }
          aria-label="Example table with dynamic content"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody
            emptyContent="Không tìm người dùng nào"
            items={userList?.data || []}
          >
            {(user: User) => (
              <TableRow key={user._id}>
                {(columnKey) => {
                  if (columnKey === "displayName") {
                    return (
                      <TableCell>
                        {user.displayName || "Chưa có tên hiển thị"}
                      </TableCell>
                    );
                  }
                  if (columnKey === "userRole") {
                    return (
                      <TableCell>
                        <div className="w-[150px]">
                          <Select
                            onSelectionChange={(value) => {
                              handleChangeUserRole(user._id, value as any);
                            }}
                            isDisabled={
                              user._id === userId || user.userRole === "admin"
                            }
                            disabledKeys={["admin"]}
                            defaultSelectedKeys={[user.userRole]}
                            label="Role"
                          >
                            {Object.keys(UserRole).map((userRole) => (
                              <SelectItem key={userRole} value={userRole}>
                                {UserRole[userRole as keyof typeof UserRole]}
                              </SelectItem>
                            ))}
                          </Select>
                        </div>
                      </TableCell>
                    );
                  }
                  return <TableCell>{getKeyValue(user, columnKey)}</TableCell>;
                }}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
