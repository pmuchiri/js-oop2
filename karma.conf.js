// Start - Sample Code fofr Karma config to Jasmine testing)
module.exports = function(config) {
    config.set({
      browsers: ['Chrome'],
      frameworks: ['jasmine'],
      files: [
        'src/**/*.js',
        'test/**/*.spec.js'
      ]
    });
  }; 
//   End - Sample Code fofr Karma config to Jasmine testing)