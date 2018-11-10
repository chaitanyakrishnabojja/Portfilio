angular
    .module('myApp')
    .controller('getYourTAAspNetModalCtrl', getYourTAAspNetModalCtrl);

getYourTAAspNetModalCtrl.$inject = ['$modalInstance'];

function getYourTAAspNetModalCtrl($modalInstance) {
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
