let students = [
    { name: "Remy", cohort: "Jan" },
    { name: "Genevieve", cohort: "March" },
    { name: "Chuck", cohort: "Jan" },
    { name: "Osmund", cohort: "June" },
    { name: "Nikki", cohort: "June" },
    { name: "Boris", cohort: "June" }
]

// for (let person in students) {
//     console.log("Name: " + person + " | Cohort " + students[person]);
// }

for (let i = 0; i < students.length; i += 1) {
    console.log("Name: " + students[i].name + " | Cohort: " + students[i].cohort);
}

let users = {
    employees: [
        { "firstName": "Miguel", "lastName": "Jones" },
        { "firstName": "Ernie", "lastName": "Bertson" },
        { "firstName": "Nora", "lastName": "Lu" },
        { "firstName": "Sally", "lastName": "Barkyoumb" }
    ],
    managers: [
        { "firstName": "Lillian", "lastName": "Chambers" },
        { "firstName": "Gordon", "lastName": "Poe" }
    ]
}

for (let array in users) {
    for (let i = 0; i < users[array].length; i += 1) {
        let numValId = i + 1;
        let firstName = users[array][i].firstName;
        let lastName = users[array][i].lastName;
        let length = firstName.length + lastName.length;
        console.log(`${numValId} - ${lastName} ${firstName} - ${length}`);
    }
    console.log('key ' + array);
}