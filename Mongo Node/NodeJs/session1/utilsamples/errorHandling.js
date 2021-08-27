class AgeInValidError extends Error{
    constructor(args){
        super(args);
        this.name="Invalid Age";
    }

}
    function checkAge(){
        let age=17;
        if(age>=18){
            console.log("Go for Voting");
        }
        else{
            throw new AgeInValidError("Not Eligible For Voating")
        }
    }
    checkAge();