import { Button, Card, CardBody, Chip, Image } from '@nextui-org/react'
import FullScreen from '~/components/FullScreen'
import Nav2 from '~/components/Nav2'
import ProjectWrapper from '~/components/ProjectWrapper'

export default function Index() {
  const skills = ['Social Media Management', 'Content Creator', 'Marketing Analysis']
  const shortContanct = ['Hà Nội', 'luong.tuananh.biz@gmail.com', '+84 834 077 036']

  return (
    <div className="scroll-smooth h-screen overflow-auto snap-mandatory snap-y">
      <Nav2 />
      <FullScreen>
        <div>
          <Chip size="lg" variant="bordered">
            Luong Tuan Anh
          </Chip>
          <h1 className="md:text-[10rem] -mt-8 font-bold tracking-wider">Portfolio</h1>
        </div>
        <div className="absolute bottom-24 w-1/2 text-center flex justify-between">
          {skills.map((skill, index) => (
            <Chip key={index} size="lg" variant="bordered">
              {skill}
            </Chip>
          ))}
        </div>
      </FullScreen>
      <FullScreen className="grid grid-cols-2 gap-x-8">
        <div>
          <h1 className="text-7xl mb-8 font-bold">
            Xin Chào,
            <br />
            Mình là Lương Tuấn Anh
          </h1>
          <p className="text-lg mb-8">
            Sinh viên năm 2 chuyên ngành Digital Marketing tại Đại học FPT, mình có kinh nghiệm thực tế trong việc lập
            kế hoạch và thực hiện các chiến dịch marketing hiệu quả, có khả năng quản lý mạng xã hội, sáng tạo nội dung
            và phân tích dữ liệu để tối ưu hóa hiệu quả chiến dịch cũng như mở rộng tệp khách hàng cho doanh nghiệp.
          </p>
          <div className="flex items-center gap-4">
            <a href="/file/Lương Tuấn Anh_Digital Marketing.pdf" target="_blank">
              <Button className="font-bold" color="warning" variant="solid">
                Mở CV của mình
              </Button>
            </a>
            <span>Hoặc scan để xem</span>
            <img className="w-36 h-36" src="/file/qr.svg" alt="qr" />
          </div>
        </div>
        <div>
          <Image
            className="w-1/2 block mx-auto mb-8"
            alt="Myself"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <div className="flex gap-x-12 justify-center">
            {shortContanct.map((contact, index) => (
              <Chip key={index} size="lg" variant="bordered">
                {contact}
              </Chip>
            ))}
          </div>
        </div>
      </FullScreen>
      <ProjectWrapper />
    </div>
  )
}
