indexCtrl.$inject = ['$routeParams', '$modal'];

function indexCtrl($routeParams, $modal) {
    var vm = this;
    vm.viewPopUp = function (modelName) {
        console.log("viewPopUp fun");
        if (modelName == 'zieGeist') {
            var modalInstance = $modal.open({
                templateUrl: '/zietGeistModal/zietGeistModal.view.html',
                windowClass: 'show',
                controller: 'zietGeistModalCtrl as vm'
            });
        } else if (modelName == 'calculator') {
            var modalInstance = $modal.open({
                templateUrl: '/calculatorModal/calculatorModal.view.html',
                windowClass: 'show',
                controller: 'calculatorModalCtrl as vm'
            });
        }else if (modelName == 'wackAmole') {
            var modalInstance = $modal.open({
                templateUrl: '/wackAmoleModal/wackAmoleModal.view.html',
                windowClass: 'show',
                controller: 'wackAmoleModalCtrl as vm'
            });
        }else if (modelName == 'hotelReservation') {
            var modalInstance = $modal.open({
                templateUrl: '/hotelReservationModal/hotelReservationModal.view.html',
                windowClass: 'show',
                controller: 'hotelReservationModalCtrl as vm'
            });
        }else if (modelName == 'carsWithManufacturers') {
            var modalInstance = $modal.open({
                templateUrl: '/carsWithManufacturersModal/carsWithManufacturersModal.view.html',
                windowClass: 'show',
                controller: 'carsWithManufacturersModalCtrl as vm'
            });
        }else if (modelName == 'MoCell') {
            var modalInstance = $modal.open({
                templateUrl: '/moCellModal/moCellModal.view.html',
                windowClass: 'show',
                controller: 'moCellModalCtrl as vm'
            });
        }else if (modelName == 'getYourTAAngular') {
            var modalInstance = $modal.open({
                templateUrl: '/getYourTAAngularModal/getYourTAAngularModal.view.html',
                windowClass: 'show',
                controller: 'getYourTAAngularModalCtrl as vm'
            });
        }else if (modelName == 'worldMap') {
            var modalInstance = $modal.open({
                templateUrl: '/worldMapModal/worldMapModal.view.html',
                windowClass: 'show',
                controller: 'worldMapModalCtrl as vm'
            });
        }else if (modelName == 'collegeDB') {
            var modalInstance = $modal.open({
                templateUrl: '/collegeDBModal/collegeDBModal.view.html',
                windowClass: 'show',
                controller: 'collegeDBModalCtrl as vm'
            });
        }else if (modelName == 'hotelDB') {
            var modalInstance = $modal.open({
                templateUrl: '/hotelDBModal/hotelDBModal.view.html',
                windowClass: 'show',
                controller: 'hotelDBModalCtrl as vm'
            });
        }else if (modelName == 'getYourTAAspNet') {
            var modalInstance = $modal.open({
                templateUrl: '/getYourTAAspNetModal/getYourTAAspNetModal.view.html',
                windowClass: 'show',
                controller: 'getYourTAAspNetModalCtrl as vm'
            });
        }else if (modelName == 'sevenEleven') {
            var modalInstance = $modal.open({
                templateUrl: '/sevenElevenModal/sevenElevenModal.view.html',
                windowClass: 'show',
                controller: 'sevenElevenModalCtrl as vm'
            });
        }else if (modelName == 'buyAndSellHomes') {
            var modalInstance = $modal.open({
                templateUrl: '/buyAndSellHomesModal/buyAndSellHomesModal.view.html',
                windowClass: 'show',
                controller: 'buyAndSellHomesModalCtrl as vm'
            });
        }

    }
};

angular
    .module('myApp')
    .controller('indexCtrl', indexCtrl);
