db.createCollection('posts', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'text', 'creator', 'comments'],
            properties: {
                title: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                },
                text: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                },
                creator: {
                    bsonType: 'objectId',
                    description: 'must be an objectId and is required'
                },
                comments: {
                    bsonType: 'array',
                    description: 'must be an array and is required',
                    items: {
                        bsonType: 'object',
                        required: ['text', 'author'],
                        properties: {
                            text: {
                                bsonType: 'string',
                                description: 'must be a string and is requried'
                            },
                            author: {
                                bsonType: 'objectId',
                                description: 'must be an objectId and is required'
                            }
                        }
                    }
                }
            }
        }
    }
});























db.createCollection('posts', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['text', 'comments', 'creator', 'title'],
            title: {
                bsonType: 'string',
                description: 'must be a string and is required'
            },
            creator: {
                bsonType: 'objectId',
                description: 'must be an objectId and is required'
            },
            title: {
                bsonType: 'string',
                description: 'must be a string and is required'
            },
            comments: {
                bsonType: 'array',
                description: 'must be an array and is required',
                items: {
                    bsonType: 'object',
                    required: ['author', 'text'],
                    properties: {
                        author: {
                            bsonType: 'objectId',
                            description: 'must be an objectId and is required'
                        },
                        text: {
                            bsonType: 'string',
                            description: 'must be an string and is required'
                        }
                    }
                }
            }
        }
    }
});

















