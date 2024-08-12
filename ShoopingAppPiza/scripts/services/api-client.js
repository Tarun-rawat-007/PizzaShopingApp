
// Network CALL Code
async function makeNetworkCall(){
    const URL='https://raw.githubusercontent.com/Skill-risers/pizzajson/main/pizza.json';
    try{
        const response=await  fetch(URL);  //bLocked code
        const  object =await response.json();
        console.log('JSON',object);
        console.log(response);
        return object;  //wrap promise

    }catch(err){
        console.log("Some problem in api call",err);
        throw err;

    }
   





}
export default makeNetworkCall;