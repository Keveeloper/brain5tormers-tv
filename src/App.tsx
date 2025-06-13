import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function App() {

  return (
    <div className='relative w-full h-screen'>
      {/* <img className='absolute w-full h-full object-cover' src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3bb25ac3-453c-4410-d6f4-e73d06876900/public" alt="Brain5tormers tv background image" />
      <img className='absolute w-1/3 left-0 top-[50%] translate-y-[-60%]' src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/2de8fa9f-62ff-48e4-78fe-90ba0691bd00/public" alt="Brain5tormers tv background image" />
      <div className='absolute w-[72%] right-20 top-10'>
        <img className='w-full' src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/45b53e86-d735-45a2-9d9d-e85b0e63be00/public" alt="Brain5tormers tv background image" />
        <img className='absolute w-[40%] bottom-[9.8%] right-41' src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/60e07d0e-d1bd-4796-524d-03d20ebaa700/public" alt="Brain5tormers tv background image" />
      </div>
      <img className='absolute w-[60%] bottom-8 right-80' src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/eb0df014-c8c9-42f4-d160-da4af981d700/public" alt="" />
      <div className='absolute w-[45%] bottom-12 left-47'>
        <img className='w-full' src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/e780e95c-3bb0-4d1c-7f81-1dafdb730800/public" alt="" />
      </div > */}
      <Swiper 
        loop
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full h-screen"
      >
        <SwiperSlide 
          style={{display: 'flex'}} 
          className='w-full h-full justify-center items-center'
        >
          <img 
            className='absolute w-full h-full object-cover' 
            src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3bb25ac3-453c-4410-d6f4-e73d06876900/public" 
            alt="Brain5tormers tv background image" 
          />
          <img 
            className='absolute w-1/3 left-0 top-[50%] translate-y-[-60%]'
            src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/2de8fa9f-62ff-48e4-78fe-90ba0691bd00/public" 
            alt="Brain5tormers Technology background 01" 
          />
          <div className='absolute w-[84%] h-[90%] right-20 top-10'>
            <figure className='absolute w-[27%] h-[70%] left-75 top-15'>
              <img 
                className='w-full h-full object-cover' 
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/938d72ab-61dd-4dc9-df86-e65f89237300/public" 
                alt="Brain5tormers card background" 
              />
            </figure>
            <img 
              className='absolute h-[81%] right-0 top-0 opacity' 
              src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/b9b80e9e-bf69-4503-ad74-548556a01100/public" 
              alt="Brain5tormers card background" 
            />
            <div className='absolute w-[43.7%] bottom-52 right-16'>
              <img 
                className='w-full' 
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/60e07d0e-d1bd-4796-524d-03d20ebaa700/public" 
                alt="Brain5tormers card bisel" 
              />
            </div>
            <img 
              className='absolute h-[35%] bottom-[-5.4%] right-45' 
              src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/eb0df014-c8c9-42f4-d160-da4af981d700/public" 
              alt="Brain5tormers technology 02" 
            />
            <div className='absolute h-[60%] left-0 bottom-0'>
              <img className='h-full' src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/e780e95c-3bb0-4d1c-7f81-1dafdb730800/public" alt="" />
              <img className='absolute w-[85%] bottom-12 left-[50%] translate-x-[-50%]' src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/1c9b0069-7a2b-4c24-6e31-bd487ef36700/public" alt="" />
            </div >
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App
