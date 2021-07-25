import { useState, useEffect } from "react";

const useJsonFetch = (url, opts) => {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            try {
                const response = await fetch(url, opts);
                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                } else {
                    console.log(response);
                    setError(`${response.status}: ${response.statusText}`);
                }
            } 
            catch(err) {
                console.log(err);
                setError(err.toString());
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [url, opts]);

    return [data, isLoading, error];
}

export default useJsonFetch;
