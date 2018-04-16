#!/usr/bin/env node

var axios = require('axios')
var data = {};

if(process.argv[2]){
	data.params = {
		location: process.argv[2],
		key:'study_javascript_in_jirengu.com'
	}

	axios.get('http://weixin.jirengu.com/weather',data)
		.then(function(response){
			var data = response.data.weather[0]
			console.log(data.city_name, data.now.text, data.now.temperature+'°')
			console.log(data.today.suggestion.dressing.details)
		})

}else{
	axios.get('http://weixin.jirengu.com/weather?key=study_javascript_in_jirengu.com')
	.then(function(response){
		var data = response.data.weather[0]
		console.log(data.city_name, data.now.text, data.now.temperature+'°')
		console.log(data.today.suggestion.dressing.details)		
	})
}

