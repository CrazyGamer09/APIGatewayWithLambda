// @ts-ignore
exports.handler = async function(event){
    console.log("Received", event)
    return {
        statusCode:200,
        body:"Hello World"
    }
}