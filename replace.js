const fs = require('fs');

const replaceSdk = (someFile) => {
  fs.readFile(someFile, 'utf8', (err, data) => {
		if (err) return console.log(err);

		let result;

		if (data.search(/23.0.3/g) == -1) {
			result = data.replace(/23.0.1/g, '25.0.0');
		} else {
			result = data.replace(/23.0.3/g, '25.0.0');
		}
					
		fs.writeFile(someFile, result, 'utf8', (err) => {
			if (err) return console.log(err);
		});
	});
};

console.log('starting change number skd...');
/*
*	paths samples
* const paths = [
* 	'node_modules/react-native-pdf-view/android/build.gradle',
*];
*/
paths.map((path) => {
	console.log(path);
	return replaceSdk(path);
});
console.error('done change number skd...');
