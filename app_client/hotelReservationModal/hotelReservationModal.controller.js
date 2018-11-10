angular
    .module('myApp')
    .controller('hotelReservationModalCtrl', hotelReservationModalCtrl);

hotelReservationModalCtrl.$inject = ['$modalInstance'];

function hotelReservationModalCtrl($modalInstance) {
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
