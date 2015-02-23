define(["knockout"], function (ko) {

    function CustomerService() {
       
    }

    //In a real app this service would likely make an ajax call to retrieve customers from an API that ultimately calls a RDBMS. And it would return a POJO instead of an observableArray.
    CustomerService.prototype.getAll = function () {
        return [
            {
                firstName: 'Cory',
                lastName: 'House',
                address: '20108 W 90th St. Lenexa, KS 66220',
                phone: '913.707.2650',
                balance: 55.83,
                paymentHistory: [
                  {
                      date: '1/3/2015',
                      amount: 25.68,
                      total: 25.68
                  },
                  {
                      date: '12/4/2014',
                      amount: 51.22,
                      total: 85.53
                  }
                ]
            },
            {
                firstName: 'Phil',
                lastName: 'Ledgerwood',
                address: '382 Park Place Kansas City, MO 62838',
                phone: '913.932.3838',
                balance: 32.92,
                paymentHistory: [
                    {
                        date: '1/13/2015',
                        amount: 35.68,
                        total: 58.29
                    },
                    {
                        date: '12/12/2014',
                        amount: 54.82,
                        total: 89.28
                    }
                ]
            },
            {
                firstName: 'Tony',
                lastName: 'Tiger',
                address: '1 Sugar Lane Irresistable, IA 38382',
                phone: '1-800-GREEEAT',
                balance: 235.18,
                paymentHistory: []
            }
        ];
    };

    return new CustomerService();
});
