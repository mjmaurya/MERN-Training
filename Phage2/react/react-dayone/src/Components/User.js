export const User=(props)=>{
    if (props.children) {
        return(
            <div>
                <h3>User Name: {props.name} City: {props.city}</h3>
                <div>{props.children}</div>
            </div>
        );
    }
    else {
        return(
            <div>
                <h3>User Name: {props.name} City: {props.city}</h3>
            </div>
        );
    }
}