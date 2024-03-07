// import {dbApp} from "../firebaseConfig"

var ref = new Firebase(dbApp.databaseURL)

function createNewUser(userData){
    var userRef = ref.child('users')

    userRef.push({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        age: userData.age,
        groups: [],
        bets: [],
        balance: 0
    })
}

function userJoinGroup(userID, groupID){
    var userRef = chalkbetsDB.child(`users/${userID}`)
    var groupRef = ref.child(`groups/${groupID}`)


}
