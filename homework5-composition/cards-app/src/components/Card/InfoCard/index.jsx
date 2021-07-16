import Card from "..";
import CardBody from "../CardBody";

function InfoCard({ image, children }) {
    return (
        <Card>
            {image && <img src={image} className="card-img-top" alt="..." />}
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
}

export default InfoCard;