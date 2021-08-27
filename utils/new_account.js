const request = require('request');
const bundle=require('./bundleIssue')

const newAccount = (firstName,lastName,pan_No,contact,func) => {
    
    let id=Math.floor(Math.random() * 1000);
    const formData = {
        ifiID: "140793",
        formID: "MATRIX-"+id,   //Change everytime
        applicationType: "CREATE_ACCOUNT_HOLDER_01",
        spoolID: "3deb5a70-311c-11ea-978f-2e728ce88125",
        individualType: "REAL",
        salutation: "",
        firstName, //Change everytime
        middleName: "",
        lastName,     //Change everytime
        profilePicURL: "",
        dob: {
            year: 2002,                           //Change everytime
            month: 05,                //Change everytime
            day: 28               //Change everytime
        },
        gender: "",       //Change everytime
        mothersMaidenName: "",
        kycDetails: {
            kycStatus: "MINIMAL",
            kycStatusPostExpiry: "KYC_EXPIRED",
            kycAttributes: {},
            authData: {
                PAN: pan_No            //Change everytime Important
            },
            authType: "PAN"
        },
        vectors: [
            {
                type: "p",
                value: contact,           //Important
                isVerified: true
            }
        ],
        pops: [],
        customFields: {
            entity_id: "ABCD0001"
        }
    };


    const options = {
        url: 'https://fusion.preprod.zeta.in/api/v1/ifi/140793/applications/newIndividual',
        headers: {
            'X-Zeta-AuthToken': 'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidGFnIjoiMXMzZFN1aDNxX0ptdVZIbVNrUWREdyIsImFsZyI6IkExMjhHQ01LVyIsIml2IjoiZnFSRUVjREhFd09PMGJBdCJ9.TzxrVi_XT0TY_RHsZxOZTn75zh5z0gNskjLXOVmmaqU.xJ_c02ZUK7E0uZ1i7neMcw.-9yp23o9IlDY9YJbIjgnWFsszSrQTMbJEAGCECodQ4WYVPWCDsb2l838gfY3BrBMg985EFiMUje9XG8MBecoH3lK3P6na7Rcmbk0xji5ZQ6DjujYcszQydMZYwawCcw1lSPIMSRE39hRodPrLeoz55HhUN6CbngyZsuQ7nZo-FZSZYOuSHIROZdtONMtvqR1Pm0xOEwDdmL7RjItKUCr0HAG-9ec-LTUM9bY6PAHcZ35XOWoqaN7yU9TRVL89FWbq-a5oipjSgbQDe8vd8Lqcnqb__FBUPdiq4cBMpKY9EpGeUDjCqOMzjNjGkyG5KHpdU_vSrVYmdp90l3hCnkiEMl5tJo0QzldhL63xzeaugNF4qnVBm8Wxnx67sxgq0etqtgxr0ECEhYnPs4Xa_DNog.dCD3If8tL3d3FoCcS4tpEw',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    };


    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            
            func({id:info.individualID})
        }
    }
    
    
    request.post(options, callback).callback;
    
}
module.exports = newAccount;


