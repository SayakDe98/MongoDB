db.friends.aggregate([
    { $project: { _id: 0, examScores: { $filter:  { input: "$examScores", as: "sc", cond: { $gt: ["$$sc.score", 60] } } } } } 
]).pretty()