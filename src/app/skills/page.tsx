import Link from "next/link";

export default function Skills() {
  const classes =  [
    {
      course_title: "ঘরে বসে Spoken English",
      price: "৳ 1250",
      duration: 60,
      image: "skill1.jpg",
      instructor: "Munzereen Shahid"
    },
    {
      course_title: "IELTS Course by Munzereen Shahid",
      price: "Free",
      duration: 120,
      image: "skill2.jpg",
      instructor: "Munzereen Shahid"
    },
    {
      course_title: "ঘরে বসে English Grammar",
      price: "৳ 1250",
      duration: 120,
      image: "skill3.jpg",
      instructor: "Munzereen Shahid"
    },
    {
      course_title: "সহজে Spoken আরবি",
      price: "৳ 1250",
      duration: 180,
      image: "skill4.jpg",
      instructor: "Mahade Hasan"
    }
  ]
  return (
    <div className="m-14">
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
                  <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">{c.instructor}</h3>
                  <h2 className="mb-1 max-h-14 text-sm font-semibold line-clamp-2 md:text-sm ">
                    {c.duration}
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
  