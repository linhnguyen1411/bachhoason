'use strict';

angular.module('adminApp').controller('CategoriesController', CategoriesController);
CategoriesController.$inject = ['$location', '$scope', 'categoryService'];

function CategoriesController($location, $scope, categoriesService) {
  var vm = this;
  vm.$scope = $scope;
  vm.categories = [];
  vm.params = {page: 1, per_page: 10};
  vm.total_items = 100;

  vm.init = function() {
    categoriesService.loadData(vm.params).then(function mySuccess(res) {
      angular.extend(vm, res.data);
    })
  }

  vm.refresh = function(isResetPage) {
    if (isResetPage) vm.params.page = 1;
    categoriesService.loadData(vm.params).then(function mySuccess(res) {
      angular.extend(vm, res.data);
    })
  }

  vm.editCategory = function(category) {
    vm.currentCategory = angular.copy(category);
    $("#category-modal").modal("show");
  }

  vm.newCategory = function() {
    vm.currentCategory = {name: ""};
    $("#category-modal").modal("show");
  }

  vm.submit = function() {
    if (_.isUndefined(vm.currentCategory.id)) {
      removeErrorsFormInput();
      categoriesService.createCategory({category: vm.currentCategory}).then(function mySuccess(res) {
        if (res.data.status) {
          $("#category-modal").modal("hide");
          toastr["success"]("Thành công");
          vm.refresh(true);
        } else {
          setErrorFormInput(res.data.errors);
        }
      })
    } else {
      categoriesService.updateCategory(vm.currentCategory.id, {category: vm.currentCategory}).then(function mySuccess(res) {
        removeErrorsFormInput();
        if (res.data.status) {
          $("#category-modal").modal("hide");
          toastr["success"]("Thành công");
          vm.refresh(false);
        } else {
          setErrorFormInput(res.data.errors);
        }
      })
    }
  }

  vm.openConfirmCategory = function(category) {
    vm.currentCategory = angular.copy(category);
    $("#category-confirm-modal").modal("show");
  }

  vm.destroyCategory = function() {
    categoriesService.destroyCategory(vm.currentCategory.id).then(function mySuccess(res) {
      if (res.data.status) {
        $("#category-confirm-modal").modal("hide");
        toastr["success"]("Thành công");
        vm.refresh(false);
      } else {
        toastr["warning"]("Thất bại");
      }
    });
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
