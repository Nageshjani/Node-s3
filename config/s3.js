const AWS = require('@aws-sdk/client-s3');
require('dotenv').config();

const s3 = new S3Client({
     region: String(process.env.AWS_REGION),
     credentials: {
        accessKeyId: String(process.env.AWS_ACCESS_KEY_ID),
        secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY)
     }
})
module.exports = s3;