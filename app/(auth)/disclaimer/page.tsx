import Disclaimer from "./component/disclaimer"

const page = () => {
  return (
    <main className="flex overflow-hidden">
      <div className='mt-44 mb-24 padding-x padding-y max-width'>
        <div className='flex flex-wrap justify-between items-center sm:px-16 px-6 py-10'>
          <div className="flex border-solid border-slate-100 border-2 shadow-md rounded-md">
            <div className='flex-col flex-1 p-10 text-center'>
              <Disclaimer />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page