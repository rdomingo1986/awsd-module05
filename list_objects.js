require('dotenv').config();

var AWS = require('aws-sdk');
var uuid = require('node-uuid');

var bucketName = process.argv[2];

var config = {
  accessKeyId: process.env.API_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION
};

var s3 = new AWS.S3(config);

var requestParams = {
  Bucket: bucketName
}

s3.listObjectsV2(requestParams, function(err, response) {
  if (err) return console.log(err);
  console.log(response);
});
