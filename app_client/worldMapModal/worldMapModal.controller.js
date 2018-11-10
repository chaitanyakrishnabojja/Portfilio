angular
    .module('myApp')
    .controller('worldMapModalCtrl', worldMapModalCtrl);

worldMapModalCtrl.$inject = ['$modalInstance'];

function worldMapModalCtrl($modalInstance) {
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
