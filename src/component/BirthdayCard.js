function BirthdayCard(props) {
    // get the user data and pass it in 
    return (
        <div className = "content-container" key = {props.id}>
            <img className = "image" src = {props.image} alt = {props.description}/>
            <div className = "user-info">
                <h4 className = "name">{props.name}</h4>
                <p className = "birthday">{props.birthday} years</p>
            </div>
            {props.children}
        </div>
    )
}

export default BirthdayCard
    

