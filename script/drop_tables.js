var AWS = require('aws-sdk');
AWS.config.update({ accessKeyId: "myKeyId", secretAccessKey: "secretKey", region: "us-east-1" });
var dynamodb = new AWS.DynamoDB(
  {
    "endpoint": new AWS.Endpoint('http://app-vm.holidayextras.co.uk:8000'),
    region: "us-east-1"
  }
);

var params = {
  TableName: 'Trip'
};

dynamodb.deleteTable(params, function(err, data){
  if (err) console.log(err, err.stack);
  else console.log(data);
});

params = {
  TableName: 'TripBooking'
};

dynamodb.deleteTable(params, function(err, data){
  if (err) console.log(err, err.stack);
  else console.log(data);
});
