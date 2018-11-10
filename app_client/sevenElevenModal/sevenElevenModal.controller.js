angular
    .module('myApp')
    .controller('sevenElevenModalCtrl', sevenElevenModalCtrl);

sevenElevenModalCtrl.$inject = ['$modalInstance'];

function sevenElevenModalCtrl($modalInstance) {
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
