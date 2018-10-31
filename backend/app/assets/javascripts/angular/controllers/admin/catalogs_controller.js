'use strict';

angular.module('adminApp').controller('CatalogsController', CatalogsController);
CatalogsController.$inject = ['$location', '$scope', 'catalogService'];

function CatalogsController($location, $scope, catalogService) {
  var vm = this;
  vm.$scope = $scope;
  vm.catalogs = {};
  vm.params = {page: 1, per_page: 10, is_load_catalogs_selection: true};
  vm.total_items = 0;
  vm.catalogs_selection = [];

  vm.init = function() {
    catalogService.loadData(vm.params).then(function mySuccess(res){
      angular.extend(vm, res.data);
      // vm.params.is_load_catalogs_selection = false;
    });
  }

  vm.refresh = function(isResetPage) {
    if (isResetPage) vm.params.page = 1;
    catalogService.loadData(vm.params).then(function mySuccess(res){
      vm.catalogs = res.data.catalogs;
      vm.total_items = res.data.total_items;
      vm.catalogs_selection = res.data.catalogs_selection;
    });
  }

  vm.showData = function(catalog){
    vm.currentCatalog = angular.copy(catalog);
    $('#catalog-modal').modal('show');
    $("#select-parent-catalog").val(vm.currentCatalog.parent_id).trigger('change.select2');
  }

  vm.openModalCreate = function(){
    vm.currentCatalog = {name: null, parent_id: null};
    $("#select-parent-catalog").val(vm.currentCatalog.parent_id).trigger('change.select2');
    $('#catalog-modal').modal('show');
  }

  function createData(){
    catalogService.createData({catalog: vm.currentCatalog}).then(function mySuccess(res){
      removeErrorsFormInput();
      if(res.data.status) {
        $('#catalog-modal').modal('hide');
        toastr["success"]("Thành công");
        vm.refresh();
      } else {
        setErrorFormInput(res.data.errors);
      }
    })
  }

  function updateData(){
    catalogService.updateData(vm.currentCatalog.id, {catalog: vm.currentCatalog}).then(function mySuccess(res){
      removeErrorsFormInput();
      if(res.data.status) {
        $('#catalog-modal').modal('hide');
        toastr["success"]("Thành công");
        vm.refresh();
      } else {
        setErrorFormInput(res.data.errors);
      }
    })
  }

  vm.destroyData = function(id){
    swal({
      title: "Chú ý!",
      text: "Bạn chắc chắn muốn xóa bỏ danh mục này?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: "Chắc chắn rồi",
      cancelButtonText: "Thôi không xóa nữa",
    },
    function() {
      catalogService.destroyData(id).then(function mySuccess(res){
        if (res.data.status) {
          toastr["success"]("Thành công");
          vm.refresh();
        } else {
          toastr["warning"]("Thất bại");
        }
      })
    });
  }

  vm.submit = function(){
    if (_.isUndefined(vm.currentCatalog.id)) {
      createData();
    } else {
      updateData();
    }
  }

  function setErrorFormInput(errors) {
    _.forEach(JSON.parse(errors), function(values, key) {
      var $inputElement = $("[name$='category[" + key + "]']");
      if (_.isEmpty(values)) return;
      var $parentInput = $inputElement.parents(".form-group-validate");
      $parentInput.addClass("has-error");
      var error = "<span class='help-block'>" + values[0] + "</span>";
      $inputElement.parent().append(error);
    })
  }

  function removeErrorsFormInput() {
    $(".form-group-validate").removeClass("has-error");
    $(".form-group-validate").find(".help-block").remove();
  }
}
