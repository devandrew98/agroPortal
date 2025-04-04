import { portais } from "../../data/Portais";


const Home = () => {
    return (
        <>
            {portais.map((portal) => (
                <>
                    <h1>{portal.nome}</h1>
                    <a href="{portal.url}" target="_blank" rel="noopener noreferrer">{portal.url}</a>
                </>
            ))}
        </>

    );
}
export default Home;