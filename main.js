const token = ~~[Math.random()* 12345678]

const pictures = ["1.jpg","2.jpg","3.jpg"]

function login(username){
    console.log('processing token user now...')
        return new Promise((success,failed) =>{
            setTimeout(() =>{
                if(username != "rizkyyy") failed("sorry wrong data")
            success(token)
            },200)
         })
}

function getUser(token) {
    console.log('processing apikey now...')
    return new Promise((success,failed) =>{
        if(!token) failed("Sorryno tokem.cannot acces")
        if (token)
        setTimeout(() =>{
            success ({ apikey: "xkey123"})
        },500)
    })
  
}

function getPicture(apikey) {
        console.log('processing picture now...')
        if (apiKey)
            setTimeout(() =>{
                return ({ pic: pictures})
            },1500)
}
const user = login("rizkyyy")
user.then(function (x){
    console.log('lalalala',x)
    const {token} = Response
    getUser(token).then(function(Response){
        const {apiKey} =  Response
        console.log(apiKey)
    }).catch(err => console.log(err))
})
