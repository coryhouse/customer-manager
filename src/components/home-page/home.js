define(["knockout", "text!./home.html", "komapping", "services/customer"], function (ko, homeTemplate, mapping, customerService) {

    function HomeViewModel(route) {
        this.customers = mapping.fromJS(customerService.getAll());
        this.currentlySelectedCustomer = ko.observable(this.customers()[0]);
        this.paymentAmount = ko.observable(null);
        this.paymentSubmittedAlertVisible = ko.observable(false);
    }

    HomeViewModel.prototype.viewCustomerDetails = function (customer) {
        this.currentlySelectedCustomer(customer)
    };

    HomeViewModel.prototype.issuePayment = function (data, self) {
        var customer = this.currentlySelectedCustomer();
        var newBalance = customer.balance() - this.paymentAmount();
        var today = new Date();
        customer.paymentHistory.push({
            date: (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear(),
            amount: this.paymentAmount(),
            total: newBalance
        });
        customer.balance(newBalance);
        this.paymentAmount(null);
        this.paymentSubmittedAlertVisible(true);
    };

    HomeViewModel.prototype.hidePaymentSubmittedAlert = function (data) {
        this.paymentSubmittedAlertVisible(false);
    };

    return { viewModel: HomeViewModel, template: homeTemplate };
});
