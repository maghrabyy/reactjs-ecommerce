import notFoundImg from '@/assets/notfound.png';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const NotFound404Page = ()=>{
    const navigate = useNavigate();
    return <div className="not-found-page flex flex-col gap-4 items-center py-10">
        <img src={notFoundImg} alt="page not found" width={350} />
        <p className="text-4xl text-gray-600">Sorry, We couldn't find this page.</p>
        <Button onClick={()=>navigate('/')}>Back to home</Button>
    </div>
}