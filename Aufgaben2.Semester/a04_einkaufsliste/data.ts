namespace a04_shoppinglist {

    export interface input {
        inputproduct: string;
        amount: number;
        inputcomment: string;
        date: string;
        check: boolean;
    }


    export let inputs: input[] = [
        
        {    
        inputproduct: "apples",
        amount: 4,
        inputcomment: "bio",
        date: "02.11.2022", 
        check: true
        },
        {    
        inputproduct: "flour",
        amount: 1,
        inputcomment: "kilo",
        date: "20.10.2022", 
        check: true
        },
        {
        inputproduct: "oil",
        amount: 1,
        inputcomment: "litre",
        date: "14.10.2022", 
        check: false
        }
    ];
}