const loggedInReducer = (state = "", action)=>{
    switch (action.type) {
        case "IS_LOGGED_IN":
            return (state=true);
          
    
        default:
         return(state = "")
    }
}
export default loggedInReducer;