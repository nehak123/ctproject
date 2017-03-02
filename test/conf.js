exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: 
  	[
  		'controller/showOrderCtrlTest.js',
  		'controller/addOrderCtrlTest.js'
  	],
  files: 
  	[
  		'app/controllers/showOrderController.js',
  		'app/controllers/addOrderController.js',
  	]
}