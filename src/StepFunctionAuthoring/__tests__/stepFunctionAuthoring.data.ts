export const parallelExample = {
    Comment: 'Parallel Example.',
    StartAt: 'LookupCustomerInfo',
    States: {
        LookupCustomerInfo: {
            Type: 'Parallel',
            End: true,
            Branches: [
                {
                    StartAt: 'LookupAddress',
                    States: {
                        LookupAddress: {
                            Type: 'Task',
                            Resource: 'abc',
                            End: true
                        }
                    }
                },
                {
                    StartAt: 'LookupPhone',
                    States: {
                        LookupPhone: {
                            Type: 'Task',
                            Resource: 'arn:aws:lambda:us-east-1:123456789012:function:PhoneFinder',
                            End: true
                        }
                    }
                }
            ]
        }
    }
};