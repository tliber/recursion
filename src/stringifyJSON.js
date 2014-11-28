// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var sFyed = '';
  var obj = obj;
  if (typeof(obj) === ('string')){
  	return sFyed.concat('"', obj, '"');
  };
  if ((typeof(obj) === 'number') || (typeof(obj) === 'boolean') || (obj === null)) {
  	return sFyed.concat(obj);
  };


   if ((typeof(obj) === 'function') || (typeof(obj) === 'undefined')) {
   	return false};

  if (Array.isArray(obj) === true){
  	sFyed = sFyed + ('[')
	for (var i in obj){
		
		if (i != 0){
		sFyed = sFyed + ',' +  (stringifyJSON(obj[i]));
		}
		else{
			sFyed = sFyed +  (stringifyJSON(obj[i]))
		}
	
	};	
	
	sFyed = sFyed + (']');
  	return sFyed;
  };
  if (typeof(obj) === 'object'){
  	sFyed = sFyed + ('{');
  	var count = Object.keys(obj).length;
  	console.log(count)
  	if (count > 0){
  		for (var i in obj){
			if (stringifyJSON(obj[i]) === false) continue;
			if (!(count === 1)){
				sFyed = sFyed +  '"' + i + '"' + ":" + (stringifyJSON(obj[i])) + ','
				count = count - 1;
			}
			else{
				sFyed = sFyed +  '"' + i + '"' + ":" + (stringifyJSON(obj[i]))
			}
		}
	};
	sFyed += ('}');
	};
  	
  	
  	return sFyed;
};
