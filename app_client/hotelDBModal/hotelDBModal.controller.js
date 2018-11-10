angular
    .module('myApp')
    .controller('hotelDBModalCtrl', hotelDBModalCtrl);

hotelDBModalCtrl.$inject = ['$modalInstance'];

function hotelDBModalCtrl($modalInstance) {
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
