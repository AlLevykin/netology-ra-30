import { useState, useEffect } from "react";
import Loading from '../Loading/Loading';
import Card from '../Card';

function Details({ info }) {

  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (info) {
      setLoading(true);
      setUser(null);
      fetch(`/data/${info.id}.json`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [info]);

  return (
    user ?
      <Card freestyled>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`${user.avatar}?id=${user.id}`} className="img-fluid rounded-start" alt={user.name} onLoad={() => setLoading(false)} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {
                isLoading ?
                  <Loading />
                  :
                  <>
                    <h5 className="card-title">{user.name}</h5>
                    <ul className="list-group list-group-flush">
                      {
                        Object.keys(user.details).map(property =>
                          <li
                            key={`id${user.id}-${property}`}
                            className="list-group-item"
                          >
                            <strong>{property}:</strong> {user.details[property]}
                          </li>)
                      }
                    </ul>
                  </>
              }
            </div>
          </div>
        </div>
      </Card>
      :
      <></>
  );
}

export default Details;