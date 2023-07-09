
import Image from 'next/image';
import buyer1 from '../../../../public/images/photo.png';
import buyer2 from '../../../../public/images/photo1.png';
import buyer3 from '../../../../public/images/photo2.png';
import buyer4 from '../../../../public/images/photo3.png';
import buyer5 from '@/../public/images/photo4.png';


const RecentContacts = () => {
const buyers=[
    {
        id:1,
        name:'Floyd Miles',
        status:'Successful',
        email:'info@example.com',
        time:'1 Year ago',
        image:buyer1,
        color:'#4538D3'
    },
    {
        id:2,
        name:'Devon Lane',
        status:'Pending',
        email:'info@example.com',
        time:'6 month ago',
        image:buyer2,
        color:'#725002'
    },
    {
        id:3,
        name:'Jacob Jones',
        status:'Override',
        email:'info@example.com',
        time:'1 month ago',
        image:buyer3,
        color:'#A82500'
    },
    {
        id:4,
        name:'Cody Fisher',
        status:'Successful',
        email:'info@example.com',
        time:'3 Year ago',
        image:buyer4,
        color:'#4538D3'
    },
    {
        id:5,
        name:'Jane Copper',
        status:'Successful',
        email:'info@example.com',
        time:'1 Year ago',
        image:buyer5,
        color:'#4538D3'
    },
    
]


    return (
        <div className="overflow-x-auto my-6 bg-white rounded">
            <h1>Recent Contacts</h1>
            <table className="table ">
                {/* head */}
                <thead className='bg-[#CFD5F6]'>
                    <tr>
                        <th className='text-[18px] font-normal text-[#2E293E]'>Full Name</th>
                        <th className='text-[18px] font-normal text-[#2E293E]'>Status</th>
                        <th className='text-[18px] font-normal text-[#2E293E]'>Email</th>
                        <th className='text-[18px] font-normal text-[#2E293E]'>Time</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        buyers.map(buyer=>(<tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image src={buyer.image} alt="buyer" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-base	">{buyer.name}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td className='text-base' style={{color:buyer.color}}> <li>{buyer.status}</li></td>
                            <td className='text-[#4538D3]'>{buyer.email}</td>
                            <td className='text-[#2E293E]'>{buyer.time}</td>
                            
                        </tr>))
                    }
                
                  
                </tbody>

            </table>
        </div>
    )
}
export default RecentContacts;