import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const SelectOptions = ({ setSelectedOptions }: { setSelectedOptions: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <Select onValueChange={setSelectedOptions}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
                <SelectContent>
                    <SelectItem  value='sort-latest'>Mới nhất</SelectItem>
                    <SelectItem  value='verified'>Đã xác minh</SelectItem>
                </SelectContent>
        </Select>
    )
}