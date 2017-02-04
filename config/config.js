module.exports =  {
    local : function()
    {
        return {
            "host" : "127.0.0.1",
            "port" : "27017",
            "database" : "shawarma",
            "username" : "admin",
            "password" : "123456"
        };
    },
    staging : function()
    {
        return {
            "host" : "ds151707.mlab.com",
            "port" : "51707",
            "database" : "shawarma-db",
            "username" : "shawarma",
            "password" : "shawarma"
        }
    },
    prod : function()
    {
        return {
            "host" : "ds151707.mlab.com",
            "port" : "51707",
            "database" : "shawarma-devs-prod",
            "username" : "shawarma",
            "password" : "shawarma"
        };
    }

};
