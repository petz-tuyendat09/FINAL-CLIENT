import { Cat } from "@/shared/ui/Cat";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './booking.css';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CTimePicker from "@/shared/ui/CTimePicker/CTimePicker";
import { CDatePicker } from "@/shared/ui/CDatePicker/CDatePicker";
import dayjs, { Dayjs } from 'dayjs';
import { CServiceSelect } from "@/shared/ui/CSelect/CSelect";
type FormData = {
    name: string;
    email: string;
    phone: string;
    date: Dayjs;
    time: Dayjs;
};
export const Booking = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({});

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const customData = {
            ...data,
            date: data.date.format('DD-MM-YYYY'),
            time: data.time.format('h:mm A')
        }
        console.log(customData);
    }

    const services = [
        {
            value: '1',
            label: (
                <div>Service 1</div>
            )
        },
        {
            value: '2',
            label: (
                <div>Service 2</div>
            )
        }
    ]
    return (
        <>
            <div className="px-[40px] mt-[50px]">
                <div className="flex flex-row gap-[15px]">
                    <div className="w-[50%]">
                        <div className="bg-cream p-[20px] rounded-[10px] h-[220px]">
                            <div className="flex flex-row gap-[40px]">
                                <h1 className="text-[45px] w-[300px] leading-[47px]">Các Dịch Vụ Tại Care4Pet</h1>
                                <img src="./images/paw-print.png" width="90px" />
                            </div>
                            <div className="mt-[20px] relative">
                                <hr className="border-black" />
                                <Cat className="absolute right-0 bottom-[-11px]" />
                            </div>
                            <div className="flex flex-row pt-[15px]">
                                <p className="text-[22px]">Chuyên gia của chúng tôi</p>
                                <div className="flex flex-row relative w-[200px]">
                                    <img src="./images/user4.avif" className="w-[55px] h-[55px] rounded-[50%] absolute right-0 z-30" />
                                    <img src="./images/user5.avif" className="w-[55px] h-[55px] rounded-[50%] absolute right-[40px] z-20" />
                                    <img src="./images/user6.avif" className="w-[55px] h-[55px] rounded-[50%] absolute right-[80px] z-10" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[15px] mt-[15px]">
                            <div className="relative">
                                <img src="./images/cat.png" />
                                <div className="flex flex-row items-center gap-[10px] bg-white absolute top-[10px] left-[10px] py-[5px] px-[15px] rounded-[20px] main-btn">
                                    <span className="text-[17px]">Grooming</span>
                                    <button className="bg-[#EEECEC] w-[25px] h-[25px] flex items-center justify-center rounded-[50%]">
                                        <ArrowDownwardIcon className="text-[15px]" />
                                    </button>
                                    <div className="layer absolute top-0 left-0"></div>
                                </div>
                                <div className="absolute bottom-[10px] left-[10px]">
                                    <h1 className="font-[600] bg-white rounded-tl-[30px] rounded-tr-[30px] rounded-br-[3px] px-[15px] pt-[10px] w-[160px] text-[20px]">Làm đẹp</h1>
                                    <h2 className="rounded-bl-[30px] rounded-br-[30px] bg-white w-[200px] px-[15px] pb-[15px] pt-[10px] rounded-tr-[30px] text-[18px]">Thú cưng của bạn</h2>
                                </div>
                            </div>
                            <div className="relative">
                                <img src="./images/cat1.png" />
                                <div className="flex flex-row items-center gap-[10px] bg-white absolute top-[10px] left-[10px] py-[5px] px-[15px] rounded-[20px] main-btn">
                                    <span className="text-[17px]">Shopping</span>
                                    <button className="bg-[#EEECEC] w-[25px] h-[25px] flex items-center justify-center rounded-[50%]">
                                        <ArrowDownwardIcon className="text-[15px]" />
                                    </button>
                                    <div className="layer absolute top-0 left-0"></div>
                                </div>
                                <div className="absolute bottom-[10px] left-[10px]">
                                    <h1 className="font-[600] bg-white rounded-tl-[30px] rounded-tr-[30px] rounded-br-[3px] px-[15px] pt-[10px] w-[160px] text-[20px]">Cung cấp</h1>
                                    <h2 className="rounded-bl-[30px] rounded-br-[30px] bg-white w-[200px] px-[15px] pb-[15px] pt-[10px] rounded-tr-[30px] text-[18px]">Sản phẩm đa dạng</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[60%]">
                        <div className="bg-secondary w-[100%] rounded-[10px] py-[15px] px-[20px] relative">
                            <div>
                                <div className="bg-white pt-[20px] pb-[20px] px-[25px] rounded-tl-[20px] rounded-tr-[20px] w-[90%]">
                                    <h1 className="text-[35px] font-[500]">Đặt lịch ngay!</h1>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className="bg-white pb-[48px] pt-[30px] px-[25px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]">
                                    <div className="flex flex-row gap-[20px]">
                                        <div className="flex flex-col gap-[5px]">
                                            <label htmlFor="name">Họ tên</label>
                                            <input id="name" className="outline-none rounded-[5px] bg-[#EFF3F7] px-[10px] py-[10px] w-[350px]" {...register("name", { required: "Name is required" })} />
                                            {errors.name && <p className="text-[15px] text-red-600">{errors.name.message}</p>}
                                        </div>
                                        <div className="flex flex-col gap-[5px]">
                                            <label htmlFor="phone">Số điện thoại</label>
                                            <input id="phone" className="outline-none rounded-[5px] bg-[#EFF3F7] px-[10px] py-[10px] w-[350px]"{...register("phone", { required: "Phone number is required" })} />
                                            {errors.phone && <p className="text-[15px] text-red-600">{errors.phone.message}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[20px] mt-[20px]">
                                        <div className="flex flex-col gap-[5px]">
                                            <label htmlFor="name">Chọn ngày</label>
                                            <Controller
                                                name="date"
                                                control={control}
                                                render={({ field }) => (
                                                    <CDatePicker
                                                        {...field}
                                                        value={field.value ? dayjs(field.value) : null}  
                                                        onChange={(date: Dayjs | null) => field.onChange(date)}
                                                        className="w-[350px] h-[50px]"
                                                    />
                                                )}
                                            />
                                            {errors.date && <p className="text-[15px] text-red-600">{errors.date.message}</p>}
                                        </div>
                                        <div className="flex flex-col gap-[5px]">
                                            <label htmlFor="phone">Chọn giờ</label>
                                            <Controller
                                                name="time"
                                                control={control}
                                                render={({ field }) => (
                                                    <CTimePicker
                                                        {...field}
                                                        value={field.value ? dayjs(field.value) : null}  
                                                        onChange={(time: Dayjs | null) => field.onChange(dayjs(time))}
                                                        className="w-[350px] h-[50px]"
                                                    />
                                                )}
                                            />
                                            {errors.time && <p className="text-[15px] text-red-600">{errors.time.message}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[5px] mt-[20px]">
                                        <label>Chọn dịch vụ</label>
                                        <CServiceSelect defaultValue="1" options={services} className="w-[720px] h-[50px]" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button className="booking-btn border border-black rounded-[20px] px-[20px] w-[200px] py-[8px] mt-[50px] text-[15px] font-[500] flex items-center justify-center" type="submit"><span>ĐẶT LỊCH</span></button>
                                    </div>
                                </form>
                            </div>
                            <div className="form-layer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}