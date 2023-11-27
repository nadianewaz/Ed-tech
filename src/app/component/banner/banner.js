import { XMarkIcon } from '@heroicons/react/20/solid'
import '../banner/banner';
import Classes from '@/app/classes/page';

export default function Banner() {                   
  return (
    
    <>
    <div className="bg-no-repeat" style={{backgroundImage:`url('/img/banner.jpg')`, width: '100%',
      height: '600px'}}>
        <h1 className='font-bold text-3xl pt-20 pl-12'>৬ষ্ঠ-এইচএসসি শ্রেণির
অনলাইন ব্যাচে ভর্তি চলছে!</h1>
  <Classes></Classes>
    </div>
    </>
    
   
    
  )
}




