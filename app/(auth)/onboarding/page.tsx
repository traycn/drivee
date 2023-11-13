// phishing notif
"use client";
import Image from 'next/image'
import Disclaimer from '../disclaimer/component/disclaimer';

const page = () => {

  const redirectToSignUp = () => {

  }

  return (
    <main className="flex overflow-hidden">
      <div className='mt-44 mb-24 padding-x padding-y max-width'>
        <div className='flex flex-wrap justify-between items-center sm:px-16 px-6 py-10'>
          <div className="flex border-solid border-slate-100 border-2 shadow-md rounded-md">
            <div className='flex-col flex-1 p-10 text-center'>
              <div className='bg-blue-200 p-4'>
                <h1 className='text-blue-600 font-semibold font-inter text-4xl p-1 mt-2'>You've been "phished" :(</h1>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-200"></hr>
              <p className='p-1 font-inter pb-10'>
                The information you have entered has <span className='font-bold underline'>not</span> been stored in any way. This application was made to bring awareness
                <br />
                 into the susceptability of phishing attacks and is only meant to share knowledge on the topic.
              </p>
              <h2 className='p-2 mb-2 text-blue-600 font-semibold font-inter text-2xl text-left'>WHAT IS PHISHING?</h2>
              <blockquote className="text-2xl font-inter italic font-semibold text-gray-500 dark:text-blue">
                    <p>"Phishing scams trick users into divulging sensitive data, downloading malware, and exposing themselves or their organizations to cybercrime."</p>
                    <footer className='text-sm'>—IBM, <cite><a className='text-blue-600' href="https://www.ibm.com/topics/phishing">What is phishing?</a></cite></footer>
              </blockquote>
              <p className='p-2 mt-8 font-sans text-left'>
                &nbsp; There are many types of phishing attacks that phishers may use, with the list of tactics only getting longer. Some familiar examples are:
              </p>
              <ul className="list-disc px-12 my-2 text-left">
                <li className='font-sans'>Bulk phishing emails (e.g.: janedoe@<span className='underline'>rn</span>icrosoft.com -impersonating janedoe@<span className='underline'>m</span>icrosoft.com)</li>
                <li className='font-sans'>Spear phishing (e.g: impersonating a colleague)</li>
                <li className='font-sans'>SMS phishing, or smishing</li>
                <li className='font-sans'>Voice phishing, or vishing</li>
                <li className='font-sans'>.. and the list goes on.</li>
              </ul>
              <p className='p-2 font-inter text-left'>
                &nbsp; Phishing email statistics suggest that nearly 1.2% of all emails sent are malicious, which in numbers translates to <a className="text-blue-600" href='https://www.zdnet.com/article/three-billion-phishing-emails-are-sent-every-day-but-one-change-could-make-life-much-harder-for-scammers/'>3.4 billion phishing</a> emails daily. For every 4,200 emails sent, 1 would most likely be a phishing scam email.
              </p>
              <p className='p-2 text-md font-semibold font-inter text-center'>
                Although this application is not an email, it can very well be linked to you through one. In having individuals enter their information into a simple form (an action), these individuals are opting into exposing themselves to cybercriminals and their ill intentions.
              </p>
              <p className='p-2 font-inter text-left'>
                &nbsp; To prevent falling for these tactics, individuals should verify sender details, be cautious of urgent requests for sensitive information, and undergo regular cybersecurity awareness training. Implementing these measures, along with email filtering, enhances overall resilience against phishing threats.
              </p>
              <p className='p-2 font-inter text-left'>
                &nbsp; The volume of attempts are growing with the intent to steal our information, that's personal only to you. In this digital age, where opting to share our information without concern of who sees it and how it will be used, I hope this simulation is a gentle nudge towards skepticism and having you think twice about who you're sharing your information with and whether it's worth the costs.
              </p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-200"></hr>
              <div className=''>
                <Disclaimer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page