//find 10 users witholdest birth date
//then find next 10 like pagination
db.person.aggregate([
    {
        $match: { gender: "male" }
    },
    {
        $project: { _id: 0, name: { $concat: ["$name.first", " ", "$name.last"] }, birthDate: { $toDate: "$dob.date" } },
    },
    {
        $sort: { birthDate: 1 }
    },
    { $skip: 10 },
    { $limit: 10 }
]).pretty()