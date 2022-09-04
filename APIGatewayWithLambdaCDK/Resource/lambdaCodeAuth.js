// @ts-ignore
exports.handler = async function(event){
  console.log(event)
    let token = event.headers.AuthorizeToken

    let effect = 'Deny'

    if(token == "abc"){
        effect = 'Allow'
    }else{
        effect = 'Deny'
    }

    let policy = {
      "principalId": "user",
      "policyDocument": {
        "Version": "2012-10-17",
        "Statement": [
          {
            "Action": "execute-api:Invoke",
            "Effect": effect,
            "Resource": event.methodArn
          }
        ]
      }
    }
    return policy
      
}