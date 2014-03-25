'use strict';

describeComponent('component/hello-world', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent('<div><h1></h1></div>');
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should set content of the h1 tag to "Hello, world!"', function () {
	expect($('h1')).toHaveText('Hello, world!');
  });
});
