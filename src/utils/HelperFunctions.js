function getGreetings (){

    const now = new Date();
    const hour = now.getHours();

    console.log(hour);

    if(hour >= 6 || hour <= 12)
        return "Good Morning!"
    if(hour >= 13 || hour <= 18)
        return "Good afternoon!"
    if(hour >= 17 || hour <= 24)
        return "Good evening!"

}

export default getGreetings;