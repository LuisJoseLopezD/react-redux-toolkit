import React, { useEffect } from 'react';

// redux state
import { fetchAllUsers } from '../store/slices/users';
import { useDispatch, useSelector } from 'react-redux';

const Userlist = () => {

    const { list: members } = useSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    return (
        <div>
            {Object.keys(members).length === 0 ?
                <p className="font-normal p-2">No members added</p>
                :
                members?.map?.((item, index) => (
                    <div className="w-full px-4" key={index}>
                        <div className="flex cursor-pointer my-2 hover:bg-blue-lightest rounded">
                            <div className="w-12 h-10 text-center py-1">
                                <img className="w-9 h-9 rounded-full object-cover" src={item.avatar} alt="Rounded avatar" />
                            </div>
                            <div className="w-4/5 h-10 py-2.5 px-2">
                                <p className="hover:text-blue-dark">{item.first_name}</p>
                            </div>
                            <div className="w-1/5 h-10 text-right p-3">
                                <p className="text-sm text-grey-dark">{item.id}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Userlist;
