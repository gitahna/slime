var AWS = require("aws-sdk");

let awsConfig = {
	    "region": "us-east-2",
	    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
	    "accessKeyId": "AKIAIWY2YQXL7FXVH2DA", "secretAccessKey": "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"
	};
AWS.config.update(awsConfig);

var docClient = new AWS.DynamoDB.DocumentClient();
var yyy=2017;
console.log("Querying for movies from ",yyy,".");

var params = {
    TableName : "BoardContents",
    /*KeyConditionExpression: "#yr = :yyyy",
    ExpressionAttributeNames:{
        "#yr": "year"
    },
    ExpressionAttributeValues: {
        ":yyyy": yyy
    }
		*/
};
var result;   

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
					console.log(" @@@@@@@@@" );
            console.log(" -", item.time );

        });
				result = data;
    }
});

export function read(){
	console.log(" @@@@@@@@@" );
	return result;
}
