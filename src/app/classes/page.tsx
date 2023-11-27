import Link from "next/link";
import { prisma } from "../lib/prisma";

export default async function Classes() {
  // const classes = await prisma.courses.findMany();

  // prisma.courses.create({data:{course_title: "HSC 23 ফাইনাল রিভিশন লাইভ", price: 12, image: "class1.jpg", date: "", category: "class", rating: 4, instructor: ""}})

  const classes =  [
    {
      course_title: "HSC 23 ফাইনাল রিভিশন লাইভ",
      price: "Free",
      image: "class1.jpg"
    },
    {
      course_title: "HSC 2023 One Shot MCQ",
      price: "Free",
      image: "class2.png"
    },
    {
      course_title: "HSC 2024 ক্র্যাশ কোর্স - প্রথম পত্র [বিজ্ঞান বিভাগ]",
      price: "৳ 2500",
      image: "class3.jpg"
    },
    {
      course_title: "HSC 2024 ফুল সিলেবাস [বিজ্ঞান বিভাগ]",
      price: "৳ 5000",
      image: "class4.jpg"
    }
  ]
  return (
    <div className="m-12">
      <div className="hideScrollbar mb-16 flex flex-nowrap gap-6 overflow-x-auto xl:flex-wrap">
        {classes.map((c) => {
          const imgUrl = "\img\\" + c.image;
          return <Link href="">
            <div className="border border-[#E5E7EB]  my-0 flex h-full min-w-[200px] max-w-[200px]  cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
              <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{fontSize: "0px", opacity: 1}}>
                <img alt="" loading="lazy" width="272" height="152" decoding="async" data-nimg="1" className="" src={imgUrl} style={{color: "transparent"}}/>
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                <div>
                  <h2 className="mb-1 max-h-14 text-sm font-semibold line-clamp-2 md:text-lg ">
                    {c.course_title}
                  </h2>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-sm font-[600] text-[#1DAB55] md:text-lg">{c.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        })}
      </div>
    </div>
  )
}
  