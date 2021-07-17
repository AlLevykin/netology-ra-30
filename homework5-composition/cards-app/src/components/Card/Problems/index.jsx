import { useState } from "react";
import Card from "..";
import CardBody from "../CardBody";
import CardFooter from "../CardFooter";
import CardHeader from "../CardHeader";

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
}

function Problems() {

    const [problems, setState] = useState(5);

    const color = () => problems ? "danger" : "success";

    const Problems = () => {
        const arr = Array(problems).fill('Problem');
        return (
            <ul className="list-group list-group-flush">
                {
                arr.map((p, i) => <li key={uuidv4()} className="list-group-item">{p} {i+1}</li>)
                }
            </ul>
        )
    }

    return (
        <Card className={`text-${color()} border-${color()}`}>
            <CardHeader>
                <h5 className="card-title">Problems <span className={`badge rounded-pill bg-${color()}`}>{problems}</span></h5>
            </CardHeader>
            <CardBody>
                {problems ?
                    <>
                        <h5 className="card-title">Message</h5><p>Some problems have been detected in the workspace.</p>
                        <Problems />
                    </>
                    :
                    <><h5 className="card-title">Message</h5><p>No problems have been detected in the workspace.</p></>
                }
            </CardBody>
            <CardFooter>
                <button className={`btn btn-${color()}`} onClick={
                    () => {
                        setState(problems ? problems - 1 : 5)
                    }
                }>
                    {problems ? "Do something!" : "Don't touch this!"}
                </button>
            </CardFooter>
        </Card>
    );
}

export default Problems;