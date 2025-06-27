import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { TiStarFullOutline } from "react-icons/ti";

export const SelectByStar = ({setSelectedStar} : {setSelectedStar: React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <Select onValueChange={setSelectedStar}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Sắp xếp theo đánh giá" />
            </SelectTrigger>
            <SelectContent >
                {Array.from({ length: 5 }, (_, i) => 5 - i).map((starCount) => (
                    <SelectItem key={starCount} value={`${starCount}`} >
                        <div className="flex items-center gap-1">
                            {Array.from({ length: starCount }).map((_, idx) =>{
                                return(
                                <TiStarFullOutline
                                    key={idx}
                                    className="text-yellow-400"
                                />
                            )})}
                        </div>
                    </SelectItem>
                ))}

            </SelectContent>
        </Select>
    )
}