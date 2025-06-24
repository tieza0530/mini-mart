import { ServiceProps } from "./type.service";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
export const SelectServices = ({listServices , setSelectedService} : {listServices: ServiceProps[] | null, setSelectedService: React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <Select onValueChange={setSelectedService}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Sắp xếp theo dịch vụ" />
            </SelectTrigger>
            <SelectContent>
                {listServices && listServices.map(service => {
                    return(
                      <SelectItem key={service.ID} value={service.Slug}>{service.Name}</SelectItem>
                    )
                })}
            </SelectContent>
        </Select>
    )
}