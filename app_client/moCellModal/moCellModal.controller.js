angular
    .module('myApp')
    .controller('moCellModalCtrl', moCellModalCtrl);

moCellModalCtrl.$inject = ['$modalInstance'];

function moCellModalCtrl($modalInstance) {
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
