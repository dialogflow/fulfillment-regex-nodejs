/* Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function validateEmployeeID (agent) {
    // get the employee ID parameter from the request header received from Dialogflow
    let employeeID = agent.parameters.employeeID;
    let pattern = /[^a-zA-Z0-9]/;
    if (employeeID.length !== 6) {
      agent.add(`The length of the Employee ID should be six characters. Please enter the correct ID.`);
    } else if (employeeID.match(pattern) !== null) {
      agent.add(`Employee ID should have only letters or numbers. Please enter the correct ID.`);
    } else {
      agent.add(agent.request_.body.queryResult.fulfillmentText);
    }
  }

  function welcome (agent) {
    agent.add(`Welcome to my agent!`);
    agent.add(agent.request_.body.queryResult.fulfillmentText);
  }

  function fallback (agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Get Employee ID', validateEmployeeID);
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  agent.handleRequest(intentMap);
});
