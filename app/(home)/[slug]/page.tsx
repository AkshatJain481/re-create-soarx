import React from 'react';
import { getEventBySlug } from '@/services/events';
import Image from 'next/image';
import SoarXlogo from '../../../public/images/Soarx-transparent-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faXTwitter  } from '@fortawesome/free-brands-svg-icons';
import { SiGooglemeet } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';

 async function page({ params }: { params: { slug: string } }) {

       const event = await getEventBySlug(params.slug);
       const DESC = event?.description;
       interface StringtoString {
        [key: string]: string;
    }
       const Month: StringtoString =  {
        "0": "JAN",
        "1": "FEB",
        "2": "MAR",
        "3": "APR",
        "4": "MAY",
        "5": "JUN",
        "6": "JUL",
        "7": "AUG",
        "8": "SEP",
        "9": "OCT",
        "10": "NOV",
        "11": "DEC",
    }
    const FullMonth : StringtoString = {
        "0": "January",
        "1": "February",
        "2": "March",
        "3": "April",
        "4": "May",
        "5": "June",
        "6": "July",
        "7": "August",
        "8": "September",
        "9": "October",
        "10": "November",
        "11": "December",
    };
    function convertTo12HourFormat(timeString: string) {
        // Split the time string into hours and minutes
        const [hours, minutes] = timeString.split(':');
    
        // Convert hours from string to number
        let hour = parseInt(hours, 10);
    
        // Determine AM/PM based on hour value
        const period = hour >= 12 ? 'PM' : 'AM';
    
        // Convert hour to 12-hour format
        hour = hour % 12 || 12; // Convert 0 to 12 for 12-hour format
    
        // Format the time in 12-hour format with leading zero for minutes
        return `${hour}:${minutes.padStart(2, '0')} ${period}`;
    }
    
    function detectLinkType(link: string): string {
        if (link.match(/^https:\/\/meet\.google\.com\/[a-zA-Z0-9_-]+$/)) {
            return "Google Meet";
        } else if (
            link.match(
                /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)$/
            ) ||
            link.match(/^https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)$/)
        ) {
            return "YouTube";
        } else {
            return "Unknown";
        }
    }

         return (
   <>
   <div className='mt-[10%]'>
   <div className="flex justify-center">
       <div className="">
               <Image
                     src={String(event?.imageUrl)} // Insert the image source
                     alt="poster"
                     className="rounded-[20px]"
                     width={320}
                     height={320}
                   />
           <div className="pt-6 font-semibold">Hosted by</div>
           <div className="company border-b-[1px] border-[#a8a8a8] flex">
           <Image
                     src={SoarXlogo}
                     alt="logo"
                     className="w-[100px]"
                     width={0}
                     height={0}
                   />
                   <FontAwesomeIcon icon={faInstagram} className='h-[20px] my-auto ml-[50%]' style={{color: "#828282",}} />
                   <FontAwesomeIcon icon={faXTwitter} className='h-[20px] my-auto ml-[20px]' style={{color: "#6b6b6b",}} />
           </div>
           
       </div>
       <div className="pb-[100px] ml-[4%]">
           <h1 className=" text-[2.4rem]">{event?.title}</h1>
           <div className="flex mt-[25px]">
               <div className="h-[45px] w-[40px] border-[1px] border-[#b0aeae] rounded-lg text-center">
                   <div className='bg-[#b0aeae] h-[20px] rounded-t-md text-[12px] font-semibold'>
                       { event ? Month[event.date.getMonth()] : (<>NA</>)}
                   </div>
                   {event?.date.getDate()}
               </div>
               <div className="ml-[15px]">
                   <div className="">{event?.date ? new Date(event.date).toLocaleDateString('en-IN', { weekday: 'long' }) : ''}, {event ? FullMonth[event.date.getMonth()]:(<> NA</>)} {" "} {event?.date.getDate()}</div>
                   <div className="">
                   {event?.startTime ? convertTo12HourFormat(event.startTime) : ''} to {' '}
                     {event?.endTime ? convertTo12HourFormat(event.endTime) : ''} GMT+5:30
                     </div>
               </div>
           </div>
           <div className="mt-4 flex"> 
           {/* <SiGooglemeet/> */}
               <a href={`${event?.meeturl}`} className="flex items-center cursor-pointer"><div className='border-[1px] border-[#b0aeae] p-[12px] rounded-lg mr-4'>{event?.location  == 'Online' && event.meeturl ? (<>{detectLinkType(event.meeturl) == "Google Meet"?(<> <SiGooglemeet/> </>):(<><FaYoutube/></>)}</>):(<FaBuilding/>)}</div> {event?.location == 'Online' && event.meeturl ? (<>{detectLinkType(event.meeturl)}</>):(<>{event?.venue}</>)}</a>
               <a href={''} className="flex items-center ml-10 cursor-pointer"><div className='border-[1px] border-[#b0aeae] p-[12px] rounded-lg mr-4'><FaWhatsapp/></div> WhatsApp</a>

               
           </div>
           <div className=" mt-[5%] rounded-lg shadow-lg h-[160px]">
               <div className="rounded-t-md h-[40px] bg-[#F4F2FB] font-semibold text-[#8919E4] text-[18px] flex items-center pl-4">Registration</div>
               <div className="mt-[3%] text-center text-[1.1rem]">Welcome! To join the event, please register below.</div>
               <div className="flex justify-center mt-[2%]"><button className="Event-reg-button">Register</button></div>
           </div>
           <div className="border-l-[3px] border-[#C2A1F4] border-dashed mt-[3%]">
           <div className="ml-[3%] font-semibold text-[#8919E4]  text-[20px]">About Event</div>
           <article className="mt-[2%] ml-[3%] max-w-[550px] text-[17.5px]">
               {/* <p className="">🚀 During the session, we’ll tackle three array problems, ranging from easy  to hard. Whether you’re a beginner or an experienced coder, this event promises something for everyone.</p><br/><br/>
               <p className="">Learn from industry experts as they dive into the world of arrays and share their insights. Our dynamic speakers include:</p><br/><br/>
               <p className=""><b>Deepak Kumar</b> (SDE, Amazon, and Ex-Paytm)<br/>
                               <b>Niket Thakur</b> (SDE, InsuranceDekho, and Ex-Amazon)</p><br/><br/>
               <p className="">This demo is your chance to: <br/><br/>
               <b>Experience the teaching style </b>of our expert instructors. <br/>
               <b>See firsthand</b> how we approach DSA problem-solving.<br/>
               <b>Get a sneak peek </b>of the comprehensive curriculum offered in our
               upcoming <b> 2.5-month DSA Live Classes Initiative!</b>
               </p><br/><br/>
               <p className=""><b>Ready to take your coding skills to the next level?</b> <br/><br/>
               Master Data Structures & Algorithms with our structured learning program to equip you for coding challenges.
               </p><br/><br/> */}
               {DESC}
                   <p className=""><b>Register for the FREE Demo Class now!</b> <br/> <br/>
               For more queries and event updates, join the SoarX Network on
               WhatsApp: <a href='https://chat.whatsapp.com/Lo86odRitWe6EBSeXSAkrX' className='text-green-500' target='blank'>https://chat.whatsapp.com/Lo86odRitWe6EBSeXSAkrX</a> </p>
               
                  
           </article>
           
       </div>
       </div>
       
       

   </div>
   </div>
</>  
  )
}

export default page