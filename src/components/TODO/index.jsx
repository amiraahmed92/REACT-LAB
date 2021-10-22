import { Card } from "../Card";
export const TODO = (props) => {
    return(
        <Card>
        <div>
            
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
        </Card>
    );
};