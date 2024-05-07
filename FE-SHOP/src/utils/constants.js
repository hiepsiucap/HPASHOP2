/** @format */

import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "Trang chủ",
    url: "/",
  },
  {
    id: 2,
    text: "Chúng tôi",
    url: "/about",
  },
  {
    id: 3,
    text: "sản phẩm",
    url: "/products",
  },
  {
    id: 4,
    text: "dự án",
    url: "/construction",
  },
];
export const testimonial = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1705718530/UserAvatar/khlgxse3og1bww1f8d5i.jpg",
    name: "John",
    title: "Parent",
    comment:
      "Yuness đã làm toàn bộ bài nghiên cứu của tôi từ đầu đến cuối trong vòng chưa đầy 2 tuần và đạt được đánh giá 7, một mức độ xuất sắc. Thật sự, không thể hỏi được một gia sư toán tốt hơn.",
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1703593314/UserAvatar/n0bwbvecb4beuxdkvnxu.jpg",
    name: "Anna",
    title: "Parent",
    comment:
      "Chúng tôi có một số gia sư Khoa học xuất sắc mà các học sinh rất mến mộ. Những học sinh đó đã tiến lên từ cấp độ 2 và 3 lên đến cấp độ 4 và 5.",
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1703592224/UserAvatar/t0wkbl4eiep86x7ohkmw.jpg",
    name: "Marry",
    title: "Parent",
    comment:
      "Niranjan là một gia sư tuyệt vời hoàn toàn.Giúp tôi cải thiện đáng kể điểm số môn Sinh học từ 6 lên 9. Không thể đề xuất nhiều hơn cho những người khác.",
  },
];
export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "Linh hoạt về Tùy Chọn",
    text: "Nhiều lựa chọn về màu sắc, kiểu dáng và vật liệu để phản ánh cá tính và sở thích riêng",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Dịch vụ Tư vấn Cá Nhân",
    text: "Tư vấn chuyên nghiệp, lắng nghe và đáp ứng đúng mong muốn cá nhân của khách hàng.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "Gia Công Theo Yêu Cầu",
    text: "Sản xuất sản phẩm độc đáo, thậm chí có thể điều chỉnh theo yêu cầu đặc biệt của khách hàng.",
  },
];
export const Adminlinks = [
  {
    id: 1,
    name: "dashboard",
    text: "Tổng Quan",
    url: "dashboard",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "order",
    text: "Đơn Hàng",
    url: "orders",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "customer",
    text: "Khách hàng",
    url: "customers",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "products",
    text: "Sản phẩm",
    url: "products",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "profit",
    text: "Lợi nhuận",
    url: "profit",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
  },
];

export const products_url = "http://localhost:4000/api/v1/products";

export const single_product_url = `http://localhost:4000/api/v1/products/`;
