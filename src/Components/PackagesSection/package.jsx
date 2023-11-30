import React from 'react';

const PackageSection = () => {
    return (
        <div>
            <div className=' md:w-1/3 mx-auto text-center'>
                <h3 className='text-2xl font-semibold text-slate-600'>Select your Best Option!</h3>
                <div className='border-y-4 border-fuchsia-600 mt-4' >
                    <h1 className='text-3xl my-3 font-bold'>Packages Section</h1>

                </div>
            </div>
            <div className='md:flex justify-evenly my-10' >
                    
                <div className="card  bg-slate-100 border shadow-2xl ">
                    <div className="card-body">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold text-center">Basic </h2>
                            <h2 className="text-xl font-semibold text-center">
                          $ 5  </h2>
                        </div>
                        <p>Maximum 5 employees</p>
                        <div className="card-actions ">
                            <button className="btn btn-primary w-full">Select</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-slate-100 border shadow-2xl border-2 border-fuchsia-600">
                    <div className="card-body">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold text-center">Standard </h2>
                            <h2 className="text-xl font-semibold text-center">
                          $ 8  </h2>
                        </div>
                        <p>Maximum 10 employees</p>
                        <div className="card-actions ">
                            <button className="btn btn-primary w-full">Select</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-slate-100 border shadow-2xl ">
                    <div className="card-body">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold text-center">Primium </h2>
                            <h2 className="text-xl font-semibold text-center">
                          $ 15  </h2>
                        </div>
                        <p>Maximum 20 employees</p>
                        <div className="card-actions ">
                            <button className="btn btn-primary w-full">Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageSection;