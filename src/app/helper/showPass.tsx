import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

export const HandleShowPass = ({ showPass, setShowPass }: { showPass: boolean, setShowPass: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const handleEyeOff = () => {
        setShowPass(!showPass)
    }
    const handleEye = () => {
        setShowPass(!showPass)
    }
    return (
        <div>
            {showPass ? <IoEyeOffOutline onClick={handleEyeOff} /> : <IoEyeOutline onClick={handleEye} />}
        </div>
    )
}