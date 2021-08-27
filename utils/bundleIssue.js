const request = require('request');

const bundle = (account,contact,call) => {

    const bodyData = {
        accountHolderID: account,   //Individual Id change
        name: "MATRIX-TESTING",
        phoneNumber: contact
    }
    const options = {
        url: 'https://fusion.preprod.zeta.in/api/v1/ifi/140793/bundles/413faba2-5d0e-4ba4-af74-cf47afc9bd6a/issueBundle',
        headers: {
            'X-Zeta-AuthToken': 'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidGFnIjoiMXMzZFN1aDNxX0ptdVZIbVNrUWREdyIsImFsZyI6IkExMjhHQ01LVyIsIml2IjoiZnFSRUVjREhFd09PMGJBdCJ9.TzxrVi_XT0TY_RHsZxOZTn75zh5z0gNskjLXOVmmaqU.xJ_c02ZUK7E0uZ1i7neMcw.-9yp23o9IlDY9YJbIjgnWFsszSrQTMbJEAGCECodQ4WYVPWCDsb2l838gfY3BrBMg985EFiMUje9XG8MBecoH3lK3P6na7Rcmbk0xji5ZQ6DjujYcszQydMZYwawCcw1lSPIMSRE39hRodPrLeoz55HhUN6CbngyZsuQ7nZo-FZSZYOuSHIROZdtONMtvqR1Pm0xOEwDdmL7RjItKUCr0HAG-9ec-LTUM9bY6PAHcZ35XOWoqaN7yU9TRVL89FWbq-a5oipjSgbQDe8vd8Lqcnqb__FBUPdiq4cBMpKY9EpGeUDjCqOMzjNjGkyG5KHpdU_vSrVYmdp90l3hCnkiEMl5tJo0QzldhL63xzeaugNF4qnVBm8Wxnx67sxgq0etqtgxr0ECEhYnPs4Xa_DNog.dCD3If8tL3d3FoCcS4tpEw',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    }


    function callback(error, response, body) {
        console.log("pahunch gaya")
    
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            console.log(info.accounts[0].accountID)
            call(info.accounts[0].accountID)
        }
    }


    request.post(options, callback).callback;

}
module.exports = bundle;
