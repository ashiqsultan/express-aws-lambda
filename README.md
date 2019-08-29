# Express JS  in AWS Lambda
This is a boiler plate code to deploy Express in AWS Lambda using Serverless JS. Using this you can built Express APIs in your local machine and deploy them in AWS lambda with just few commands.

Run the local.js file to test the application locally
```
npm install
npm start
```
## About the files and folders 
 * lambda.js - File which is called by AWS lambda
 * local.js - Run the app on localhost.
 * src/app.js - Your App logic
 * serverless.yml - Lambda function configration.
## How to use
* Both the lambda.js and local.js calls the express **app** in the src/app.js
* Write your business logic (Express API) inside the **src** folder
* npm start runs the local.js file to test the app in your local machine
* serverless.yml file contains your details about your AWS region and name of your Lambda function, they are self-explanatory edit them to your needs
 * Leave the lambda.js an local.js file alone unless you know what you are doing

### Prerequisites for Deploying in AWS
* An AWS account 
* AWS CLI installed in your machine
### AWS Configrations
Download and install AWS CLI. After installing run the following command in the terminal to configure your AWS account.
```
aws configure
```
it will ask for Access Key and Secret key, you can find them in your AWS online console.
 
## Deployment
Run the following command to deploy the app as AWS Lambda function
```
npm run deploy
```
##After deployment
* Go to your AWS console and choose Lambda from Services.
* You can find your deployed function in list.
* Find the URL to invoke your function in the API endpoint.
* Your endpoint URL should look something like this
```
https://abcd123.execute-api.us-east-1.amazonaws.com/production/{proxy+}
``` 
##Invoke your function
omit the ' {proxy+} ' and use the rest of the URL to call the function
```
https://abcd123.execute-api.us-east-1.amazonaws.com/production/
``` 
The above URL outputs the responce in app.get('/', (req, res) => {}) in the app.js file
