import React, { useState, useEffect } from 'react';

const useQuery = (callback, dependencyList = [], initialValue = undefined) => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [paginate, setPaginate] = useState({})
    useEffect(() => {
        setLoading(true),
            callback().then((res) => {
                setData(res.data);
                setPaginate(res.data.paginate);
                setLoading(false);
            });
    }, dependencyList);
    return {
        data,
        paginate,
        loading
    }
}
export default useQuery;