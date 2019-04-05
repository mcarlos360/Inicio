var page = require('page');
var empty= require('empty-element');
var template = require('./template');

page('/', function(ctx, next){
	var main = document.getElementById('main-container');

	var pictures = [
		{user:{
					name:'username',
					avatar:'http://downloadicons.net/sites/default/files/user-icon-44709.png'
				},
				url:'office.jpg',
				likes:10,
				linked: true
		},
		{user:{
					name:'username',
					avatar:'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjT1rLyr7nhAhXN1FkKHVVHBVAQjRx6BAgBEAU&url=http%3A%2F%2Fwww.softicons.com%2Fweb-icons%2Ffree-icon-set-by-eclipse-saitex%2Fuser-icon&psig=AOvVaw29BD1f--dFk_MTFFCP0GBz&ust=1554568024987895'
				},
				url:'office.jpg',
				likes:1,
				linked: true
		}];
			empty(main).appendChild(template(pictures));
		})
