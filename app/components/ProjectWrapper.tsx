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
          sectionName: 'Mục Tiêu',
          info: (
            <ul>
              <li>- Đạt tối thiếu 100 trẻ em tham gia sự kiện</li>
              <li>- Trẻ em hiểu được thông điệp muốn truyền tải sau khi tham gia</li>
            </ul>
          )
        },
        {
          sectionName: 'Công Việc Đảm Nhiệm',
          info: (
            <div className="flex flex-wrap gap-4">
              <Card className="w-fit bg-background font-bold">
                <CardBody>Tìm kiếm và đàm phán địa điểm tổ chức</CardBody>
              </Card>
              <Card className="w-fit bg-background font-bold">
                <CardBody>Kiểm soát dòng tiền dự án</CardBody>
              </Card>
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
          <div className={`w-full col-start-${(index % 2) + 1}`}>
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
