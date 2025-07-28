import React from 'react'

export const Header = () => {
  return (
    <header className="bg-white py-4 px-4 sm:px-6 lg:px-8 border-b ">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        
        {/* Phần bên trái: Logo và thông tin công ty */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/image/hinh5.jpg" // Đảm bảo đường dẫn này chính xác
            alt="Lắp điện logo"
            className="h-16 sm:h-20 w-auto mr-3 sm:mr-4 rounded-full" // Kích thước logo thay đổi theo màn hình
          />
          <div className="text-center md:text-left">
            <h1 className="text-red-700 font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wide">
              Dịch Vụ Xây Lắp Điện Lâm Đồng Mới
            </h1>
            <p className="text-black text-xs sm:text-sm mt-1">
              Phường Bình Thuận – Tỉnh Lâm Đồng
            </p>
          </div>
        </div>

        {/* Phần bên phải: Hotline */}
        <div className="flex items-center">
          {/* 
            Thay thế bằng một ảnh duy nhất chứa cả icon và "24/7" để đơn giản hóa.
            Nếu bạn muốn giữ nguyên 2 phần riêng, chúng ta sẽ cần điều chỉnh thêm.
            Giả sử bạn có một file ảnh là `hotline-icon.png`
          */}
          <img
            src="/image/bill-cates-icon-24-7.png" // Thay thế bằng icon hotline của bạn
            alt="Hotline 24/7"
            className="h-12 sm:h-14 w-auto"
          />
          <div className="ml-2">
            <p className="text-red-700 font-bold text-xl sm:text-2xl md:text-3xl tracking-wider">
              0969.219.209
            </p>
          </div>
        </div>

      </div>
    </header>
  )
}
