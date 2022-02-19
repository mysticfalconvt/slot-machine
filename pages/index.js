import Head from 'next/head'
import Image from 'next/image'

const options = [
  'cherry', 'orange', 'lemon', 'watermelon'
]

const getRandom = () => Math.floor(Math.random() * 4);
const getRandoms = () => {
  return [
    options[getRandom()],
    options[getRandom()],
    options[getRandom()]
  ]
}

const Slider = ({ selected }) => {
  return (
    <div className="flex-1 w-[120px] h-full divide-y-4 divide-purple-900">
      <div className="w-[120px] h-[30px]"></div>
      <div className="w-[120px] h-[120px]">
        <Image height="120" width="120" src={`/${selected}.svg`} />
      </div>
      <div className="w-[120px] h-[30px]"></div>
    </div>
  )
}

export default function Home() {
  const firstSet = getRandoms()
  return (
    <div className="font-sans bg-gray-200 absolute inset-0 overflow-hidden flex items-center justify-center">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="border-4 border-purple-900 rounded-sm shadow-lg bg-white w-full max-w-2xl">
        <div className="border-4 border-blue-700 relative">
          <div className="border-4 border-purple-900 p-4">
            <Image src="/logo.svg" width="103" height="37" />

            <div className="flex items-center justify-center">
              <div className="border-4 border-purple-900 rounded-sm relative z-10">
                <div className="bg-teal-400 p-2">
                  <div className="border-4 border-purple-900 rounded-sm bg-white overflow-hidden">
                    <div className="flex items-center h-[180px] divide-x-4 divide-purple-900">
                      {firstSet.map((elem, i) => (
                        <Slider selected={elem} key={i} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 z-20 top-1/2 mt-[-35px] ml-[-20px]">
                  <Image src="/left-arrow.svg" width="40" height="75" />
                </div>
                <div className="absolute right-0 z-20 top-1/2 mt-[-35px] mr-[-20px]">
                  <Image src="/right-arrow.svg" width="40" height="75" />
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <a className="border-4 border-purple-900 text-purple-900 font-extrabold h-8 flex items-center">
                <span className="px-3 border-r-4 border-purple-900 block">cash out</span>
                <span className="px-2">12</span>
              </a>
              <a className="border-4 border-purple-900 text-purple-900 font-extrabold h-8 flex items-center">
                <span className="px-3 border-r-4 border-purple-900 block">credits</span>
                <span className="px-2">4</span>
              </a>
            </div>
            <div className="absolute z-20 bottom-0 w-full flex justify-center mb-[-30px]">
              <a className="border-4 border-purple-900 text-white bg-red-500 px-6 py-2 font-extrabold hover:bg-red-400 hover:border-purple-800 transition-colors">
                try your luck
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
