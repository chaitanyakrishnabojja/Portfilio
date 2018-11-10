angular
    .module('myApp')
    .controller('carsWithManufacturersModalCtrl', carsWithManufacturersModalCtrl);

hotelReservationModalCtrl.$inject = ['$modalInstance'];

function carsWithManufacturersModalCtrl($modalInstance) {
    var vm = this;
    
    vm.modal = {
        close: function (result) {
            $modalInstance.close(result);
        },
        cancel: function () {
            $modalInstance.dismiss('cancel');
        }
    };


}
