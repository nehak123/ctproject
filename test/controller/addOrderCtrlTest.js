describe('add Order ctrl', function () {
    var $httpBackend, ctrl, myService;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, _$httpBackend_, _$rootScope_) {
        scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;

        ctrl = _$controller_('addOrderController', {
            $scope: scope
        });      

    }));

    describe('call my service', function() {
        it('should make request when form submit', function() {
            $httpBackend.expectPOST('/api/toy/123').respond({id:123, detail:456 });
            ctrl.submitAnOrder('/api/toy/123').then(function(toy){
                expect(scope.toy.detail).toBe(456);
            })
            $httpBackend.flush();   
     })
 })