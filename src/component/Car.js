export default function Car(props){
    let{model,description,power,volume}=props;
    return(
        <div>
            <h2>{model}</h2>
            <p>{description}</p>
            <p>{power}{volume}</p>

        </div>
    );

}