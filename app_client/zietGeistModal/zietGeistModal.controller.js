angular
    .module('myApp')
    .controller('zietGeistModalCtrl', zietGeistModalCtrl);

zietGeistModalCtrl.$inject = ['$modalInstance'];

function zietGeistModalCtrl($modalInstance) {
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
