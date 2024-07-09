import { Card, CardBody } from '@nextui-org/react'
import FullScreen from './FullScreen'

export default function ProjectWrapper() {
  const data: ProjectData[] = [
    {
      title: 'Mùa Hè Xanh',
      brief:
        'Mùa Hè Xanh là một dự án giúp trẻ em hiểu được tác hại của đồ nhựa đối với sinh vật biển, góp phần giúp môi trường trở nên sạch đẹp hơn',
      images: [
        'https://i.imgur.com/LzSozH2.jpeg',
        'https://i.imgur.com/lBCNSBe.jpeg',
        'https://i.imgur.com/OWRSCkV.jpeg',
        'https://i.imgur.com/XOb5S7C.jpeg'
      ],
      sections: [
        {
          sectionName: 'Kết Quả',
          info: (
            <ul>
              <li>- Đạt 100 trẻ em tham gia sự kiện</li>
              <li>- Trẻ em hiểu được thông điệp muốn truyền tải sau khi tham gia</li>
            </ul>
          )
        },
        {
          sectionName: 'Công Việc Đảm Nhiệm',
          info: (
            <div className="flex flex-wrap gap-4">
              <CardWrapper>Tìm kiếm và đàm phán địa điểm tổ chức</CardWrapper>
              <CardWrapper>Kiểm soát dòng tiền dự án</CardWrapper>
            </div>
          )
        }
      ]
    },
    {
      title: 'Summer Rhythms',
      brief: 'Brand trang sức thủ công, tập trung vào đối tượng khách hàng trẻ từ 18-25',
      images: [
        'https://i.imgur.com/634StKT.png',
        'https://i.imgur.com/j6vOef8.png',
        'https://i.imgur.com/1JncgZ2.png',
        'https://i.imgur.com/L1hkg5E.png'
      ],
      sections: [
        {
          sectionName: 'Kết Quả',
          info: (
            <ul>
              <li>- 500 sản phẩm được bán ra trong 6 tuần</li>
              <li>- Tổng view trên các nền tảng đạt trên 20k, 3k follower mới</li>
              <li>- Toàn bộ khách hàng feedback tốt về sản phẩm</li>
            </ul>
          )
        },
        {
          sectionName: 'Công Việc Đảm Nhiệm',
          info: (
            <div className="flex flex-wrap gap-4">
              <CardWrapper>Quản lý và vận hành dự án</CardWrapper>
              <CardWrapper>Kiểm soát chi phí, doanh thu và lợi nhuận</CardWrapper>
            </div>
          )
        }
      ]
    }
  ]

  interface ProjectData {
    title: string
    brief: string
    images: string[]
    sections: {
      sectionName: string
      info: JSX.Element
    }[]
  }

  return (
    <>
      {data.map(({ title, brief, images, sections }, index) => (
        <FullScreen key={index} className="grid grid-cols-2 grid-flow-dense gap-x-8 place-items-center">
          <div className={`w-full`}>
            <h2 className="text-7xl font-bold text-center mb-8">
              <span className="text-3xl font-normal">Dự Án</span>
              <br />
              {title}
            </h2>
            <div className="text-lg mb-8">
              <h3 className="text-2xl text-warning-600 font-bold mb-4">Tổng Quan</h3>
              {brief}
            </div>
            {sections.map(({ sectionName, info }, index) => (
              <div key={index} className="text-lg mb-8">
                <h3 className="text-2xl text-warning-600 font-bold mb-4">{sectionName}</h3>
                {info}
              </div>
            ))}
          </div>
          <div className="w-fit grid grid-cols-2 revert row-auto gap-8 place-items-center">
            {images.map((image, index) => (
              <img
                key={index}
                alt={`${title}_${index}`}
                src={image}
                loading="lazy"
                className="w-full h-full max-w-80 max-h-80 rounded-xl"
              ></img>
            ))}
          </div>
        </FullScreen>
      ))}
    </>
  )
}

function CardWrapper({ children }: { children: string }) {
  return (
    <Card className="w-fit bg-background font-bold">
      <CardBody>{children}</CardBody>
    </Card>
  )
}
