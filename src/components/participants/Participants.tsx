import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useLocation } from 'react-router';
import useParticipants from '../../hooks/useParticipants';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Participants = () => {
    const location = useLocation();
    console.log(location.pathname);
    
    const { participants, loading, error } = useParticipants(location.pathname === '/medellin' ? 'Medellín' : 'Bogotá');
    return (
        <div className='relative w-full h-screen'>
            <Swiper 
                loop
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-full h-screen"
            >
                {participants.map((participant) => (
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
                            <figure className='absolute w-[27%] h-[70%] left-75 top-15 bg-[#100E15]'>
                            <img 
                                className='w-full h-full object-cover' 
                                src={participant.image_url}
                                alt="Brain5tormers card background" 
                            />
                            </figure>
                            <img 
                            className='absolute h-[81%] right-0 top-0 opacity' 
                            src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/b9b80e9e-bf69-4503-ad74-548556a01100/public" 
                            alt="Brain5tormers card background" 
                            />
                            <div className='absolute w-[43.7%] right-16 top-30'>
                            <h2 className='text-3xl text-white font-[Turret_Road]'> {participant.ocuppation.toUpperCase()}</h2>
                            <p className='mb-3 text-cyan-400 text-2xl font-[Turret_Road]'>{participant.professional_power.toUpperCase().substring(0, 32)}</p>
                            <h2 className='mb-3 text-2xl text-white font-[Montserrat]'>{'Me interesa:'.toUpperCase()} <span className='text-cyan-400'>{participant.purpose.toUpperCase()}</span></h2>
                            <p className='text-xl text-white font-light font-[Montserrat]'>
                                {participant.talk_about}
                            </p>
                            </div>
                            <div className='absolute w-[43.7%] bottom-52 right-16'>
                            <img 
                                className='w-full' 
                                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/60e07d0e-d1bd-4796-524d-03d20ebaa700/public" 
                                alt="Brain5tormers card bisel" 
                            />
                            <div className='p-4 absolute w-full h-[55%] top-0'>
                                <h2 className='text-3xl text-right text-white font-[Montserrat]'>{participant.email.toUpperCase()}</h2>
                            </div>
                            <div className='p-4 pr-5 absolute w-full h-[45%] bottom-0'>
                                <h2 className='text-2xl text-right font-[Montserrat]'>{participant.instagram.toUpperCase()}</h2>
                            </div>
                            </div>
                            <img 
                            className='absolute h-[35%] bottom-[-5.4%] right-45' 
                            src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/eb0df014-c8c9-42f4-d160-da4af981d700/public" 
                            alt="Brain5tormers technology 02" 
                            />
                            <div className='absolute h-[60%] left-0 bottom-0'>
                            <img 
                                className='h-full' 
                                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/e780e95c-3bb0-4d1c-7f81-1dafdb730800/public" 
                                alt="card name" 
                            />
                            <div className='absolute w-[85%] bottom-25 left-[50%] translate-x-[-50%]'>
                                <h1 className='text-cyan-400 text-right text-5xl font-[Turret_Road]'>{participant.name.toUpperCase()}</h1>
                            </div>
                            <div className='absolute w-[85%] bottom-12 left-[50%] translate-x-[-50%]' >
                                <img 
                                className='w-full' 
                                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/1c9b0069-7a2b-4c24-6e31-bd487ef36700/public" 
                                alt="company bisel" 
                                />
                                <h2 className='absolute right-10 top-1 text-2xl text-white font-[Montserrat]'>{participant.event_type.toUpperCase()}</h2>
                            </div>
                            </div >
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Participants;