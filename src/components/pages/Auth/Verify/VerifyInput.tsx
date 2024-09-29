import { useRef } from "react";

interface OTPInputProps {
  otp: Array<number | undefined>;
  setOtp: (otp: Array<number | undefined>) => void;
}

export default function OTPInput({ otp, setOtp }: OTPInputProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]); // Ref cho các input

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;

    // Chỉ cho phép nhập 1 chữ số
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = Number(value); // Chuyển đổi thành kiểu number
      setOtp(newOtp);

      // Nếu không phải là ô cuối cùng, chuyển focus sang ô tiếp theo
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = undefined; // Xóa giá trị hiện tại (trả về undefined)
      setOtp(newOtp);

      // Nếu không phải là ô đầu tiên, quay lại ô trước đó
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text");

    // Kiểm tra nếu dữ liệu đã paste có phải là 6 chữ số
    if (/^\d{6}$/.test(pasteData)) {
      const newOtp = pasteData.split("").map(Number); // Chuyển đổi thành mảng các số
      setOtp(newOtp);

      // Gán giá trị cho từng input và chuyển focus tới input cuối cùng
      newOtp.forEach((digit, index) => {
        if (inputRefs.current[index]) {
          inputRefs.current[index]!.value = String(digit); // Hiển thị số
        }
      });

      // Focus vào ô cuối cùng sau khi paste
      inputRefs.current[5]?.focus();
    }
  };

  return (
    <div className="mx-auto mt-2 w-fit space-x-2">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          className="h-12 w-12 rounded-lg border border-[#e5dbdb] bg-gray-darker text-center drop-shadow-sm"
          value={value !== undefined ? value : ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          maxLength={1} // Giới hạn 1 ký tự
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
}
