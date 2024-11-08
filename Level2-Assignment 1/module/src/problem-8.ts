{
    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean{
        
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];

            if(obj[key]  === undefined){
                return false;
            }
        }

        return true;
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["age"]));
    
}