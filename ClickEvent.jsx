function ClickEvent(){
    let FirstName="Zaiinab"
    function sayhello(){
        // alert("hello")
        // 
        
        FirstName="Shehzadi"
        alert(FirstName)
    }
    return(
        <div>
            {/* <h2>Zainab Shehzadi</h2> */}
            <h2>{FirstName}</h2>
            <button onClick={sayhello}>Click Me</button>
            {/* <button onClick={alert("Zainab")}>Click Me</button> */}
        </div>

    )
}
export default ClickEvent;