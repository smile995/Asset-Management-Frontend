import React from 'react';

const About = () => {
    return (
        <div className='my-10  text-center '>
            <div className=' md:w-1/3 mx-auto'>
                <h3 className='text-2xl font-semibold text-slate-600'>Your Journey Begins from Here !</h3>
                <div className='border-y-4 border-fuchsia-600 mt-4' >
                    <h1 className='text-3xl my-3 font-bold'>About Section</h1>
                </div>
            </div>
            <div className='bg-slate-200 md:p-10 mt-10 rounded-lg  text-lg'>
                <p>
                    Welcome to Your Company website, where opportunities meet innovation, and careers are crafted for success. Whether you are exploring roles as an employee or seeking to make a mark in HR/Admin, our platform is your gateway to a vibrant professional ecosystem.
                </p>
                <p className='my-3'>
                    Join us in shaping the future of work, where creativity, diversity, and growth converge. As an employee, immerse yourself in a culture that celebrates individuality and collective achievement. For HR/Admin professionals, step into a realm where your expertise transforms workplaces and empowers teams.
                </p>
                <p>
                    At Your Company website, we are not just building careers; we're fostering a community where talents flourish, ideas thrive, and connections propel success. Connect with us, collaborate with brilliance, and embark on a journey where your aspirations unfold into achievements. Your story of growth and accomplishment starts here. Welcome to Your Company website, where your future awaits!
                </p>
            </div>

        </div>
    );
};

export default About;