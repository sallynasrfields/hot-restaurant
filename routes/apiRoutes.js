module.exports = function (app) {
    app.post("/send-to-json", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        var newReservation = req.body;

        if (tablesSeated.length > 4) {
            waitingForATable.push(newReservation);
        }
        else {
            tablesSeated.push(newReservation);
        }

        res.json(newReservation);
    });
};
