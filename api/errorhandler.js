const errorhandler = require('errorhandler');
    function errorNotification(err, str, req) {  
        console.log('!!!handler')
        var title = 'Error in ' + req.method + ' ' + req.url
        console.log('!!!handler2')
        notifier.notify({  
          title: title,  
          message: str  
        })
       }       

module.exports = errorhandler({log: errorNotification})