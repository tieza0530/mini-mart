"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { getFindCategory } from "../components/getFindCategory";
import { CategoryProps } from "@/app/components/home/components/type.category";
import { ServiceProps } from "../components/type.service";
import { getServiceByIDCategory } from "../components/getServiceByIDCategory";
import { SelectServices } from "../components/SelectServices";
import { SelectByStar } from "../components/SelectByStar";
import { SelectActivity } from "../components/SelectActivity";
import { SelectOptions } from "../components/SelectOptions";
import { ServicesHint } from "@/app/components/home/ServicesHint";

export default function TypeCategory() {
    const [Category, setCategory] = useState<CategoryProps | null>(null);
    const [listServices, setListServices] = useState<ServiceProps[] | null>(null)
    const [selectedStar, setSelectedStar] = useState<string>('');
    const [selectedService, setSelectedService] = useState<string>('');
    const [selectActivity, setSelectedActivity] = useState<string>('')
    const [selectOptions, setSelectedOptions] = useState<string>('')
    const searchParams = useParams();

    console.log("selectStar", selectedStar);
    console.log("selectedService", selectedService);
    console.log("selectActivity", selectActivity);
    console.log("selectOptions", selectOptions);

    useEffect(() => {
        const getCategory = async () => {
            const data = await getFindCategory(searchParams.slug)
            setCategory(data.data);
        }
        getCategory();
    }, [searchParams.slug])
    useEffect(() => {
        const getServices = async () => {
            if (!Category?.ID) return
            const data = await getServiceByIDCategory(Category?.ID)
            setListServices(data.data);
        }
        getServices();
    }, [Category])


    return (
        <div>
            <p className="text-3xl font-semibold">{Category?.Category}</p>
            <p>{Category?.Description}</p>
            <div className="grid grid-cols-4 my-6 gap-4">
                <SelectServices listServices={listServices} setSelectedService={setSelectedService} />
                <SelectByStar setSelectedStar={setSelectedStar} />
                <SelectActivity setSelectedActivity={setSelectedActivity} />
                <SelectOptions setSelectedOptions={setSelectedOptions} />
            </div>
            <ServicesHint />
        </div>
    )
}