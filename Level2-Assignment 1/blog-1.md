Union Type: 

In typescript union types allows us to hold multiple values of the variable and it can be shown by (|) operator.

Example: 

type User = "admin" | "volunteer";

Here, the User type can hold the value "admin" and as well as the "volunteer". It won't give any errors if we use one of these values.




Intersection Type: 

Intersection type creates new type by combining all the types together. For combining all the types it needs to use & operator.

Example: 

interface nameAge {
name: string;
age: number;
}

interface emailPhone {
email: string;
phone: number;
}

type Person = nameAge & emailPhone;

Here, the person type can contain all the property of nameAge and emailPhone. 
