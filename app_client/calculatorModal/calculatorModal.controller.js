angular
    .module('myApp')
    .controller('calculatorModalCtrl', calculatorModalCtrl);

calculatorModalCtrl.$inject = ['$modalInstance'];

function calculatorModalCtrl($modalInstance) {
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
