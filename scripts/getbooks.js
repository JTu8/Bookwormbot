"use strict";

module.exports = function (robot) {
    robot.commands.push(
        "Bookworm get all books - Gives you list of all books"
    );

    //Gets all books
    robot.respond(/get all books/i, function(response) {
        response.send("You're books sir");
    });
};
