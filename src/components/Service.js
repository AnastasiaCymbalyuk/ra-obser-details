/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom';
import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getServiceRequest } from '../action/action';

export default function Service() {
    const match = useParams();
    const {item, loading, error} = useSelector(state => state.serviceCard);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getServiceRequest(match.id));
    }, []);

    const handleReload = () => {
        dispatch(getServiceRequest(match.id));
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return (
            <div>
                <p>Something went wrong try again</p>
                <button onClick={handleReload}>Reload</button>
            </div>
        );
    }

    return (
        <div className='ServiceCard'>
            {item && (
                <div>
                    <Link to='/services'>Back</Link>
                    <div>
                        {item.name} - {item.price} - {item.content}
                    </div>
                </div>
            )}
        </div>
    );
}