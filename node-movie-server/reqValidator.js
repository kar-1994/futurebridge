exports.reqValidator = (req, res, next) => {
    const user_data = req.body;
    console.log(user_data);
    if (!user_data || JSON.stringify(user_data) == '{}') res.status(400).send("Invalid request body.");
    else if (!user_data.email || user_data.email == "") res.status(400).send("Please provide valid email.");
    else if (!user_data.mobile || user_data.mobile == "") res.status(400).send("Please provide valid mobile.");
    else if (!user_data.name || user_data.name == "") res.status(400).send("Please provide valid name.");
    else next();
}