import notFoundImg from '@/assets/notfound.png';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const NotFound404Page = ()=>{
    const navigate = useNavigate();
    return <div className="not-found-page section grid md:grid-cols-2 items-center py-10">
        <div className="notfound-msg flex flex-col gap-3 md:items-start items-stretch md:order-first order-last">
            <p className="xl:text-3xl text-xl  md:text-start text-center text-gray-600">Sorry, We couldn't find this page.</p>
            <Button onClick={()=>navigate('/')}>Back to home</Button>
        </div>
        <img src={notFoundImg} alt="page not found" />
    </div>
}