import React from 'react'

export const Footer = () => {
    const contactInfo = [
    { icon: '📌', text: ' Lâm Đồng Mới ( Bao gồm 3 Tỉnh : Lâm Đồng , Bình Thuận , Đắk Nông )' },
    { icon: '👍', text: 'Dịch Vụ Xây lắp Điện Tỉnh Lâm Đồng Mới' },
    { icon: '👍', text: 'Địa chỉ: Phường Bình Thuận – Tỉnh Lâm Đồng' },
    { icon: '👍', text: 'Điện thoại: 0969.219.209' },
  ];
  return (
    <footer className=" bg-black text-gray-200 px-4 sm:px-6 lg:px-8 flex justify-center items-center py-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Cột 1: Thông tin liên hệ */}
        <div className='flex flex-col gap-4'>
          <div className='text-lg font-semibold uppercase'>Thông tin liên hệ</div>
          <div className='h-0.5 w-10 bg-gray-500'/>
          <ul className="space-y-1">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 pt-1">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
            <div className='text-lg font-semibold'>FANPAGE</div>
            <div className='h-0.5 w-10 bg-gray-500'/>
          <div className="overflow-hidden rounded-md w-full max-w-md mx-auto">
              <a
                href="https://www.facebook.com/start.blue.98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/image/h2.jpg"
                  alt="Link to Facebook Profile"
                  className="w-full h-auto object-cover rounded-lg hover:opacity-80 transition-opacity duration-300"
                  loading="lazy"
                />
              </a>
</div>
        </div>

        {/* Cột 3: Đường đi */}
        {/* <div className='flex flex-col gap-4'>
            <div className='text-lg font-semibold uppercase'>Đường đi</div>
            <div className='h-0.5 w-10 bg-gray-500'/>
          <div className="overflow-hidden rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.327529452048!2d108.1113804!3d10.9383013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15!3m3!1m2!1s0x3176831260aa3539:0x1afdedf18b57a931!2zUGjGsHUgVGjhu5UsIFRwLiBQaGFuIFRoaWXFtywgQsOsbmggVGjhuqduLCBWacOqbiBOYW0!5e0!3m2!1svi!2s!4v1722171080!5m2!1svi!2s"
              width="100%"
              height="214"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> */}
      </div>
    </footer>
  )
}
