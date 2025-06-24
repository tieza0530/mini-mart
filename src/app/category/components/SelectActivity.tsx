import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FcClock } from "react-icons/fc";

export const SelectActivity = ({ setSelectedActivity }: { setSelectedActivity: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <Select onValueChange={setSelectedActivity}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Sắp xếp theo thời gian" />
            </SelectTrigger>
                <SelectContent>
                    <SelectItem  value='open'><span><FcClock/></span>Đang mở cửa</SelectItem>
                    <SelectItem  value='full-day'><span><FcClock/></span>Mở cửa 24/7</SelectItem>
                </SelectContent>
        </Select>
    )
}