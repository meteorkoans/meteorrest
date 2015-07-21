Meteor.methods({
    initApiKey: function(userId) {
        check(userId, Meteor.userId());

        var newKey = Random.hexString(32);

        try {
            var key = APIKeys.insert({
                "owner": userId,
                "key": newKey
            });
            return key;
        } catch(exception) {
            return exception;
        }
    }
})
