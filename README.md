# Regular Expression Matching Sample
This sample demonstrates how to implement regular expressions to validate entities with fulfillment in Dialogflow.

## Setup
Select **only one** of the options below.

### Option 1: Add to Dialogflow (Recommended)
To create this agent from our template:

<a href="https://console.dialogflow.com/api-client/oneclick?templateUrl=https://oneclickgithub.appspot.com/dialogflow/fulfillment-regex-nodejs" target="blank">
  <img src="https://dialogflow.com/images/deploy.png">
</a>

### Option 2: Firebase CLI
1. Create a [Dialogflow Agent](https://console.dialogflow.com/).
2.  Go to **Settings** ⚙ > **Export and Import** > **Restore from zip** using the `dialogflow-agent.zip` in this directory.
3. `cd` to the `functions` directory
4. Run `npm install`.
5. Install the Firebase CLI by running `npm install -g firebase-tools`
6. Login with your Google account, `firebase login`
7.  Add your project to the sample with `firebase use <project ID>`
  + In Dialogflow console under **Settings** ⚙ > **General** tab > copy **Project ID**.
8. Run `firebase deploy --only functions:dialogflowFulfillment`
9. Back in Dialogflow Console > **Fulfullment** > **Enable** Webhook.
10. Paste the URL from the Firebase Console’s events column into the **URL** field > **Save**.

## Samples
For all [Dialogflow-Fulfillment](https://github.com/topics/dialogflow-fulfillment) samples on Github, available in Node.js and Python.

For Fulfillment Webhook [JSON requests & responses](https://github.com/dialogflow/fulfillment-webhook-json).

## References & Issues
+ Questions? Try [StackOverflow](https://stackoverflow.com/questions/tagged/dialogflow) or [Dialogflow Developer Community](https://plus.google.com/communities/103318168784860581977).
+ Find a bug? Report it on [GitHub](https://github.com/dialogflow/fulfillment-webhook-json/issues).
+ Dialogflow [Documentation](https://dialogflow.com/docs/getting-started/basics).
+ For more information on [Initializing Firebase SDK for Cloud Functions](https://firebase.google.com/docs/functions/get-started#set_up_and_initialize_functions_sdk).
+ For more information on [Restore from Zip](https://dialogflow.com/docs/agents#export_and_import).

## Make Contributions
Please read and follow the steps in the CONTRIBUTING.md.

## License
See LICENSE.md.

## Terms
Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Google APIs Terms of Service](https://developers.google.com/terms/).
