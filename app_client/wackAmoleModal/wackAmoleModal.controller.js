angular
    .module('myApp')
    .controller('wackAmoleModalCtrl', wackAmoleModalCtrl);

wackAmoleModalCtrl.$inject = ['$modalInstance'];

function wackAmoleModalCtrl($modalInstance) {
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
