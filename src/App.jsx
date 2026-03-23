import './App.css'

function App() {

  return (
    <div className='bg-gray-100'>
      <div className="card max-w-5xl mx-auto py-4">
          <div className="card-body items-center text-center gap-4">
              <h2 className="card-title text-4xl">Our All Applications</h2>
              <p className='text-gray-500'> Explore All Apps on the Market developed by us. We code for Millions</p>
          </div>
      </div>
      <div className='flex justify-between max-w-7xl mx-auto py-4'>
        <div>
          <p className='font-semibold text-xl'>(132) Apps Found</p>
        </div>
        <div>
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto pb-16'>
                <div className="card shadow bg-white">
                    <figure className="px-4 pt-4">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Forest: Focus for Productivity</h2>
                        <div className="flex w-full justify-between">
                            <span className='p-2 rounded-xl text-green-500 bg-gray-200'><i class="fa-solid fa-download"></i> 9M</span>
                            <span className='text-[#FF8811] bg-[#FFF0E1] p-2 rounded-xl'><i class="fa-solid fa-star"></i> 5</span>
                        </div>
                    </div>
                </div>
                <div className="card shadow bg-white">
                    <figure className="px-4 pt-4">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Forest: Focus for Productivity</h2>
                        <div className="flex w-full justify-between">
                            <span className='p-2 rounded-xl text-green-500 bg-gray-200'><i class="fa-solid fa-download"></i> 9M</span>
                            <span className='text-[#FF8811] bg-[#FFF0E1] p-2 rounded-xl'><i class="fa-solid fa-star"></i> 5</span>
                        </div>
                    </div>
                </div>
                <div className="card shadow bg-white">
                    <figure className="px-4 pt-4">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Forest: Focus for Productivity</h2>
                        <div className="flex w-full justify-between">
                            <span className='p-2 rounded-xl text-green-500 bg-gray-200'><i class="fa-solid fa-download"></i> 9M</span>
                            <span className='text-[#FF8811] bg-[#FFF0E1] p-2 rounded-xl'><i class="fa-solid fa-star"></i> 5</span>
                        </div>
                    </div>
                </div>
                <div className="card shadow bg-white">
                    <figure className="px-4 pt-4">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Forest: Focus for Productivity</h2>
                        <div className="flex w-full justify-between">
                            <span className='p-2 rounded-xl text-green-500 bg-gray-200'><i class="fa-solid fa-download"></i> 9M</span>
                            <span className='text-[#FF8811] bg-[#FFF0E1] p-2 rounded-xl'><i class="fa-solid fa-star"></i> 5</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default App
