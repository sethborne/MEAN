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