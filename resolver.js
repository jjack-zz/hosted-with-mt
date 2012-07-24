var dns  = require("dns");
var app  = require("express").createServer();

app.get('/:hostname', function(req, res) {
    dns.resolve( req.params.hostname, function( err, addresses ) {
        if ( err ) {
            res.send( err );
        } else {
            res.send({ 'code':addresses[0] });
        }
    });
});
app.listen(16098);
