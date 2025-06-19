import { IframeMaps } from "./components/IframeMaps";
import { Logo } from "./components/Logo";
import { FaFacebookSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { CiBank } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="text-gray-400">
      <div className="py-6 border-t grid grid-cols-2">
        <div>
          <Logo />
          <div className="mt-6 grid grid-cols-2 gap-10">
            <ul className="text-sm space-y-2">
              <li className="text-2xl font-semibold">Thông tin</li>
              <li>Địa chỉ: Yên Sào-Xuân Giang-Sóc Sơn-Hà Nội</li>
              <li>Số điện thoại: 0379.636.362</li>
              <li>Email: tiennq201@gmail.com</li>
              <li>
                <ul className="text-blue-500 flex text-4xl space-x-1 cursor-pointer">
                  <li
                    onClick={() =>
                      window.open("https://www.facebook.com/tien9998", "_blank")
                    }
                  >
                    <FaFacebookSquare />
                  </li>
                  <li
                    onClick={() =>
                      window.open("https://zalo.me/0379636362", "_blank")
                    }
                  >
                    <SiZalo className="border p-1 rounded-sm" />
                  </li>
                  <li></li>
                </ul>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="text-2xl font-semibold">Chính sách</li>
              <li>Chính sách mua hàng</li>
              <li>Chính sách giao hàng</li>
              <li>Chính sách đổi/trả hàng</li>
              <li>Chính sách bảo mật thông tin</li>
              <li>Hướng dẫn mua hàng</li>
              <li className="text-2xl font-semibold">Thông tin thanh toán</li>
              <li>
                <ul className="flex items-center gap-2">
                  <li><CiBank className="text-2xl" /></li>
                  <li>Thanh toán khi nhận hàng</li>
                </ul>
              </li>
              <li className="text-2xl font-semibold">Chứng nhận</li>
              <li>Giấy phép kinh doanh</li>
              <li>Mã số thuế</li>
            </ul>
          </div>
        </div>
        <IframeMaps />
      </div>
      <p className="text-center text-sm text-gray-400 my-1">
        © <strong>Thúy Tuyển Mart</strong> năm 2025 – Bản quyền thuộc về <strong>Thúy Tuyển Mart</strong> 
      </p>
    </div>
  );
}
