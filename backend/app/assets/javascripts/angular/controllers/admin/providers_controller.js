'use strict';

angular.module('adminApp').controller('ProvidersController', ProvidersController);
ProvidersController.$inject = ['$location', '$scope', 'providerService'];

function ProvidersController($location, $scope, providerService) {
  var vm = this;
  vm.$scope = $scope;

  vm.init = function() {
    providerService.getData().then(function mySuccess(response){
      angular.extend(vm, response.data);
    });
  }

  vm.showData = function(id){
    providerService.showData(id).then(function mySuccess(response){
      if(response.data.status) {
        angular.extend(vm, response.data);
        $('#provider-modal').modal('show');
        vm.currentEditId = id;
      } else {
        swal("Lỗi rồi", response.data.message, "error");
      }
    });
  }

  function createData(){
    providerService.createData({provider: {name: vm.provider.name}}).then(function mySuccess(response){
      $(".form-group-validate").removeClass("has-error");
      $(".form-group-validate").find(".help-block").remove();
      if(response.data.status) {
        angular.extend(vm, response.data);
        swal("Thành công", response.data.message, "success");
        $('#provider-modal').modal('hide');
      } else {
        var errors = response.data.errors;
        _.forEach(errors, function(values, key) {
          var $inputElement = $("[name$='[" + key + "]']");
          if (_.isEmpty(values)) return;
          var $parentInput = $inputElement.parents(".form-group-validate");
          $parentInput.addClass("has-error");
          var error = "<span class='help-block'>" + values[0] + "</span>";
          $inputElement.parent().append(error);
        })
      }
    })
  }

  function updateData(id){
    providerService.updateData(id, {provider: {name: vm.provider.name}}).then(function mySuccess(response){
      $(".form-group-validate").removeClass("has-error");
      $(".form-group-validate").find(".help-block").remove();
      if(response.data.status) {
        angular.extend(vm, response.data);
        swal("Thành công", response.data.message , "success");
        $('#provider-modal').modal('hide');
      } else {
        var errors = response.data.errors;
        _.forEach(errors, function(values, key) {
          var $inputElement = $("[name$='[" + key + "]']");
          if (_.isEmpty(values)) return;
          var $parentInput = $inputElement.parents(".form-group-validate");
          $parentInput.addClass("has-error");
          var error = "<span class='help-block'>" + values[0] + "</span>";
          $inputElement.parent().append(error);
        })
      }
    })
  }

  vm.destroyData = function(id){
    swal({
      title: "Chú ý!",
      text: "Bạn chắc chắn muốn xóa bỏ nhà cung cấp?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: "Chắc chắn rồi",
      cancelButtonText: "Thôi không xóa nữa",
    },
    function() {
      providerService.destroyData(id).then(function mySuccess(response){
        if (response.data.status) {
          angular.extend(vm, response.data);
          swal("Thành công", response.data.message, "success");
        } else {
          swal("Thất bại", response.data.message, "error");
        }
      })
    });
  }

  vm.submit = function(){
    if (vm.currentEditId) {
      updateData(vm.currentEditId);
    } else {
      createData();
    }
  }
}
