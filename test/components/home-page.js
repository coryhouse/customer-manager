define(['components/home-page/home'], function(homePage) {
  var HomePageViewModel = homePage.viewModel;

  describe('Home page view model', function() {

    it('should list at least one customer', function() {
      var instance = new HomePageViewModel();
      expect(instance.customers().length).toBeGreaterThan(0);
    });
  });
});