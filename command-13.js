db.person.aggregate([
    { 
        $bucket: { 
            groupBy: "$dob.age", 
            boundaries: [18, 30, 40, 60, 80], 
            output: {
                numPersons: { $sum: 1 },
                averageAge: { $avg: "$dob.age" },
                // names: { $push: "$name.first" }
            } 
        }
    }
]).pretty()

db.person.aggregate([
    { $bucketAuto: {
        groupBy: "$dob.age",
        buckets: 5,
        output: {
            numPersons: { $sum: 1 },
            averageAge: { $avg: "$dob.age" }
        }
    }
}
]).pretty()