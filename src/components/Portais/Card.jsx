import { CardContainer } from "./Portais.style";


const Card = (props) => {
    const card = props.card;

    return (
        <CardContainer>
            <h1>{card.title}</h1>
            <Link to={props.link}>{card.title}</Link>


        </CardContainer>)



}
export default Card;
