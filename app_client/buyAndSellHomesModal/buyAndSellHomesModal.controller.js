angular
    .module('myApp')
    .controller('buyAndSellHomesModalCtrl', buyAndSellHomesModalCtrl);

buyAndSellHomesModalCtrl.$inject = ['$modalInstance'];

function buyAndSellHomesModalCtrl($modalInstance) {
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
