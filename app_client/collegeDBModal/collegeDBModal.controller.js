angular
    .module('myApp')
    .controller('collegeDBModalCtrl', collegeDBModalCtrl);

collegeDBModalCtrl.$inject = ['$modalInstance'];

function collegeDBModalCtrl($modalInstance) {
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
