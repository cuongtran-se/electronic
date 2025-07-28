import React from 'react'
import { Helmet } from 'react-helmet'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dịch Vụ Xây Lắp Điện Lâm Đồng Mới</title>
        <meta
          name="description"
          content="Dịch Vụ Xây Lắp Điện Lâm Đồng Mới là dịch vụ thi công trạm biến áp, hệ thống điện trung thế tại Bình Thuận. Được thực hiện chuyên nghiệp, uy tín."
        />
        <meta
          name="keywords"
          content="thi công trạm biến áp, điện trung thế, máy biến áp, electronic, hệ thống chiếu sáng, điện công nghiệp, Harmon, trạm biến áp Bình Thuận,
          trạm biến áp Phan Thiết, thi công điện Bình Thuận, dịch vụ điện, trạm biến áp Đắk Nông, trạm biến áp Lâm Đồng, thi công trạm biến áp Bình Thuận, 
          thi công trạm biến áp Phan Thiết, thi công điện Bình Thuận, dịch vụ điện, thi công trạm biến áp Đắk Nông, thi công trạm biến áp Lâm Đồng,
          dịch vụ xây lắp điện Lâm Đồng mới, dịch vụ xây lắp điện Bình Thuận, dịch vụ xây lắp điện Đắk Nông, dịch vụ xây lắp điện Lâm Đồng"
        />

        <meta property="og:title" content="Trạm biến áp Bình Thuận - Thi công chuyên nghiệp" />
        <meta
          property="og:description"
          content="Dịch Vụ Xây Lắp Điện Lâm Đồng Mới là dịch vụ thi công trạm biến áp, hệ thống điện trung thế tại Bình Thuận. Được thực hiện chuyên nghiệp, uy tín."
        />
        <meta property="og:image" content="https://harmon.love/image/h5-533x400.jpg" />
        <meta property="og:url" content="https://harmon.love" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
        <div className="container mx-auto max-w-5xl text-gray-500">
          <div className="py-10">
            <div className="text-3xl text-black ">Dịch Vụ Xây Lắp Điện Lâm Đồng Mới ( 3 Tỉnh : Lâm Đồng , Bình Thuận , Đắk Nông )</div>
            <p className="text-base mt-4"><span className="font-bold text-black">Dịch Vụ Xây Lắp Điện Lâm Đồng Mới</span> có nhiều năm kinh nghiệm trong lĩnh vực Tư vấn giải pháp, Thi công lắp đặt hệ thống điện, trạm điện, hệ thống chiếu sáng, máy biến áp, và các sản phẩm liên quan trong ngành điện</p>
            <div className="flex justify-center items-center my-5 gap-2">
              <img src="/image/hinh1.jpg" alt="Trạm biến áp tại Bình Thuận" className="w-100 h-100 object-cover rounded-lg" />
              <img src="/image/hinh2.jpg" alt="Trạm biến áp tại Bình Thuận" className="w-100 h-100 object-cover rounded-lg" />
            </div>
            <p className="text-base font-bold text-black">♦ Thiết kế, thi công đường dây trung hạ thế & trạm biến áp đến cấp 35kV.</p>
            <p className="text-base font-bold text-black">♦ Bảo trì, thí nghiệm các công trình lưới điện & TBA trung hạ thế đến cấp 35kV.</p>
            <p className="text-base font-bold text-black">♦ Thiết kế, thi công lắp đặt hệ thống chiếu sáng công cộng, nhà xưởng công nghiệp.</p>
            <div className="flex justify-center items-center my-5 gap-2">
              <img src="/image/hinh3.jpg" alt="Trạm biến áp tại Bình Thuận" className="w-100 h-100 object-cover rounded-lg" />
              <img src="/image/hinh4.jpg" alt="Trạm biến áp tại Bình Thuận" className="w-100 h-100 object-cover rounded-lg" />
            </div>
            <p className="text-base font-bold text-black underline">Cam kết của công ty:</p>
            <p className="text-base font-bold text-black">✓ Cung cấp vật tư, thiết bị chính hãng, có đầy đủ giấy chứng nhận CO, CQ.</p>
            <p className="text-base font-bold text-black">✓ Thi công trên tinh thần đảm bảo kịp tiến độ cho nhà đầu tư.</p>
            <p className="text-base font-bold text-black">✓ Kỹ thuật luôn được cải tiến để phù hợp với từng đặc điểm công trình.</p>
            <p className="text-base font-bold text-black">✓ Luôn hỗ trợ nhiệt tình những khó khăn và thắc mắc của quí khách hàng.</p>
            <p className="text-base font-bold text-black">✓ Giá luôn cạnh tranh mang lại hiệu quả kinh tế cao nhất cho chủ đầu tư.</p>
            <p className="text-gray-500 mt-4">Chúng tôi có nhiều năm kinh nghiệm trong lĩnh vực Tư vấn Thiết Kế, Thi công lắp đặt hệ thống điện, Trạm điện , Trạm biến áp,Trụ điện , Nhà xưởng , Kim thu Sét ,…</p>
            <p className="text-gray-500">Tiêu chí: Nhanh , Uy tín , chất lượng và giải quyết nhu cầu của khách hàng là quan trọng nhất .</p>
          </div>
        </div>
      </div>
    </>
  )
}