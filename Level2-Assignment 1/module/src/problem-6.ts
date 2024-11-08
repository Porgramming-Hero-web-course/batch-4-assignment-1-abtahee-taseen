{
    interface Profile {
        name?: string;
        age?: number;
        email?: string
    }

    const updateProfile = (param: Profile, param2: {   name?: string;
        age?: number;
        email?: string
    }) => {
        return {...param, ...param2}
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 55, name: "tas" }));

}