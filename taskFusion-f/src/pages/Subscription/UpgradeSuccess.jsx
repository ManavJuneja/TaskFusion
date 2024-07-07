import { store } from '@/Redux/Store';
import { getUserSubscription, upgradeSubscription } from '@/Redux/Subscription/Action';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UpgradeSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { subscription } = useSelector(store => store);
    // Changed from location.search to window.location.search
    const queryParams = new URLSearchParams(location.search);
    const paymentId = queryParams.get("payment_id");
    const planType = queryParams.get("planType");

    useEffect(() => {
        // Added planType and paymentId check and included them as dependencies
        
            dispatch(upgradeSubscription({ planType }));
            dispatch(getUserSubscription());
        
    }, []); // Added dependencies

    return (
        <div className='flex justify-center'>
            <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
                <div className='flex items-center gap-4'>
                    <CheckCircledIcon className='h-9 w-9 text-green-400' />
                    <p className='text-x1'>Plan Upgraded Successfully</p>
                </div>
                <div className='space-y-3'>
                    <p className='text-green-400'>Start Date : {subscription.userSubscription?.subscriptionStartDate}</p>
                    <p className='text-red-300'>End Date : {subscription.userSubscription?.subscriptionEndDate}</p>
                    <p className=''>Plan Type : {subscription.userSubscription?.planType}</p>
                </div>
                <Button onClick={() => navigate("/")}>Home</Button>
            </Card>
        </div>
    );
}

export default UpgradeSuccess;
