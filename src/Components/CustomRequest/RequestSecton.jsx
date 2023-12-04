import { useContext } from "react";
import { ContextAPI } from "../../ContaxtAPI/AuthContext";


const RequestSecton = () => {
    const { data ,user} = useContext(ContextAPI)
    return (
        <div>
            {
                user ? <div>
                <div className=' md:w-1/3 mx-auto text-center'>
                    <h3 className='text-2xl font-semibold text-slate-600'>Visit Our</h3>
                    <div className='border-y-4 border-fuchsia-600 mt-4' >
                        <h1 className='text-3xl my-3 font-bold'>Custom Request Section</h1>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    {
                        data?.map(item => <div key={item._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className="w-full h-60 " src={item.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                    {item.assetName}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{item.additional.slice(0,50)}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{item.select}</div>
                                        <div className="badge badge-outline">$ {item.price}</div>
                                    </div>
                                <div>
                                    <button className="btn btn-secondary w-full">Details</button>
                                </div>
                                </div>
                            </div>
                        </div>) 
                    }
                </div>
            </div> : <></>
            }
        </div>
    );
};

export default RequestSecton;