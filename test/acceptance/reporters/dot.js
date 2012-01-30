
var exec = require('child_process').exec;

function mocha(fn) {
  var args = [].slice.call(arguments);
  var fn = args.pop();
  exec('bin/mocha ' + args.join(' '), fn);
}

describe('dot reporter', function(){
  describe('when passing', function(){
    it('should output dots', function(done){
      mocha('test/acceptance/reporters/fixtures/pass.js', function(err, stdout, stderr){
        if (err) return done(err);
        console.log(stdout);
        done();
      });
    })
  })
})