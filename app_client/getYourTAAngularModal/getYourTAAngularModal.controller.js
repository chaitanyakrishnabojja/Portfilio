angular
    .module('myApp')
    .controller('getYourTAAngularModalCtrl', getYourTAAngularModalCtrl);

getYourTAAngularModalCtrl.$inject = ['$modalInstance'];

function getYourTAAngularModalCtrl($modalInstance) {
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
