import useJsonFetch from "../../hooks/useJsonFetch";
import Loading from '../Loading/Loading';

const JsonViewer = ({ url }) => {

    const [data, loading, error] = useJsonFetch(url);

    const Response = () => {
        if (error === null) {
            return <h1 className="text-success">{JSON.stringify(data)}</h1>
        } else {
            return <h1 className="text-danger">{JSON.stringify(error)}</h1>
        }
    };

    return (
        loading ?
            <Loading />
            :
            <Response />
    );
}

export default JsonViewer;