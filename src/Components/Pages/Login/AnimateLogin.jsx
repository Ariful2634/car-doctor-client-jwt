
const AnimateLogin = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-900">
            <div className='relative w-[380px] h-[420px] bg-gray-800  rounded-lg overflow-hidden'>
            
            <div className='absolute w-[380px] h-[420px] bg-gradient-to-r from-blue-500 via-blue-500 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right'>
            </div>
            <div className='absolute w-[380px] h-[420px] bg-gradient-to-r from-blue-500 via-blue-500 to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right'>
            </div>
            <div className='absolute w-[380px] h-[420px] bg-gradient-to-r from-purple-500 via-purple-500 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right'>
            </div>
            <div className='absolute w-[380px] h-[420px] bg-gradient-to-r from-purple-500 via-purple-500 to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right'>
            </div>
            <div className='absolute inset-1 bg-gray-800 rounded-lg z-10 p-5'></div>
            </div>
        </div>
    );
};

export default AnimateLogin;