import pic1 from '../Home../../../../assets/images/banner/1.jpg'
import pic2 from '../Home../../../../assets/images/banner/2.jpg'
import pic3 from '../Home../../../../assets/images/banner/3.jpg'
import pic4 from '../Home../../../../assets/images/banner/4.jpg'
import pic5 from '../Home../../../../assets/images/banner/5.jpg'
import pic6 from '../Home../../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img  src={pic1} className="w-full h-[600px]" />
                    <div className="absolute  gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] w-full  h-full">
                        <div className='w-[420px] space-y-6 pl-[100px] pt-[150px]'>
                        <h2 className='text-5xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                        <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-orange-600 border-none mr-6 font-bold text-white'>Discover More</button>
                            <button className='btn btn-outline font-bold text-white'>Latest Project</button>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  transform -translate-y-1/2 left-5 right-20 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={pic2} className="w-full h-[600px]" />
                    <div className="absolute  gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] w-full  h-full">
                        <div className='w-[420px] space-y-6 pl-[100px]  pt-[150px]'>
                        <h2 className='text-5xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                        <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-orange-600 border-none mr-6 font-bold text-white'>Discover More</button>
                            <button className='btn btn-outline font-bold text-white'>Latest Project</button>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  transform -translate-y-1/2 left-5 right-20 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={pic3} className="w-full h-[600px]" />
                    <div className="absolute  gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] w-full  h-full">
                        <div className='w-[420px] space-y-6 pl-[100px]  pt-[150px]'>
                        <h2 className='text-5xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                        <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-orange-600 border-none mr-6 font-bold text-white'>Discover More</button>
                            <button className='btn btn-outline font-bold text-white'>Latest Project</button>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  transform -translate-y-1/2 left-5 right-20 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={pic4} className="w-full h-[600px]" />
                    <div className="absolute  gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] w-full  h-full">
                        <div className='w-[420px] space-y-6 pl-[100px]  pt-[150px]'>
                        <h2 className='text-5xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                        <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-orange-600 border-none mr-6 font-bold text-white'>Discover More</button>
                            <button className='btn btn-outline font-bold text-white'>Latest Project</button>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  transform -translate-y-1/2 left-5 right-20 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={pic5} className="w-full h-[600px]" />
                    <div className="absolute  gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] w-full  h-full">
                        <div className='w-[420px] space-y-6 pl-[100px]  pt-[150px]'>
                        <h2 className='text-5xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                        <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-orange-600 border-none mr-6 font-bold text-white'>Discover More</button>
                            <button className='btn btn-outline font-bold text-white'>Latest Project</button>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  transform -translate-y-1/2 left-5 right-20 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={pic6} className="w-full h-[600px]" />
                    <div className="absolute  gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] w-full  h-full">
                        <div className='w-[420px] space-y-6 pl-[100px]  pt-[150px]'>
                        <h2 className='text-5xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                        <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-orange-600 border-none mr-6 font-bold text-white'>Discover More</button>
                            <button className='btn btn-outline font-bold text-white'>Latest Project</button>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  transform -translate-y-1/2 left-5 right-20 bottom-0">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;