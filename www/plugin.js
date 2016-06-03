Plugin.nfcacr122 = function(content){
  var onSuccess = function(){};
  var onFail = function(){};
  cordova.exec(onSuccess, onFail, 'NfcAcr122Plugin', 'nfcacr122', [content]);
};