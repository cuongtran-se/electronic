import React from 'react'

export const Footer = () => {
    const contactInfo = [
    { icon: '📌', text: 'Công ty TNHH xây lắp điện Trung Hưng' },
    { icon: '👍', text: 'Xây lắp điện Bình Thuận' },
    { icon: '👍', text: 'Địa chỉ: 56 Nguyễn Văn Linh, P. Xuân An, Tp. Phan Thiết' },
    { icon: '👍', text: 'Điện thoại: 0917 985 170' },
    { icon: '👍', text: 'Website: https://xaylapdienbinhthuan.com' },
  ];
  return (
    <footer className=" bg-black text-gray-200 px-4 sm:px-6 lg:px-8 flex justify-center items-center py-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
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
          <div className="overflow-hidden rounded-md">
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="100%" 
                height="214" 
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
              </iframe>
          </div>
        </div>

        {/* Cột 3: Đường đi */}
        <div className='flex flex-col gap-4'>
            <div className='text-lg font-semibold uppercase'>Đường đi</div>
            <div className='h-0.5 w-10 bg-gray-500'/>
          <div className="overflow-hidden rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.327529452048!2d108.1090176758413!3d10.93297595679357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317696f7c1b52a7d%3A0xf65b4b3b27673539!2zWMOieSBs4bqvcCDEkWnhu4duIELDrG5oIFRodeG6rW4!5e0!3m2!1svi!2s!4v1668581673824!5m2!1svi!2s"
              width="100%"
              height="214"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  )
}
