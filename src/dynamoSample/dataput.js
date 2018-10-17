
var AWS = require("aws-sdk");
var fs = require('fs');

let awsConfig = {
	    "region": "us-east-2",
	    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
	    "accessKeyId": "AKIAIWY2YQXL7FXVH2DA", "secretAccessKey": "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"
	};
AWS.config.update(awsConfig);

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");

var allMovies = JSON.parse(fs.readFileSync('moviedata.json', 'utf8'));
allMovies.forEach(function(movie) {
    var params = {
        TableName: "Movies",
        Item: {
            "year":  movie.year,
            "title": movie.title,
            "info":  movie.info
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", movie.title);
       }
    });
});
