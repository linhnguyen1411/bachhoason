'use strict';

angular.module('adminApp').controller('CategoriesController', CategoriesController);
CategoriesController.$inject = ['$location', '$scope', 'categoryService'];

function CategoriesController($location, $scope, categoryService) {
  var vm = this;
  vm.$scope = $scope;
  vm.categories = [];
  vm.params = {page: 1, per_page: 10};
  vm.total_items = 0;

  vm.init = function() {
    categoryService.loadData(vm.params).then(function mySuccess(res) {
      angular.extend(vm, res.data);
    })
  }

  vm.refresh = function(isResetPage) {
    if (isResetPage) vm.params.page = 1;
    categoryService.loadData(vm.params).then(function mySuccess(res) {
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
      categoryService.createCategory({category: vm.currentCategory}).then(function mySuccess(res) {
        if (res.data.status) {
          $("#category-modal").modal("hide");
          toastr["success"]("Thành công");
          vm.refresh(true);
        } else {
          setErrorFormInput(res.data.errors);
        }
      })
    } else {
      categoryService.updateCategory(vm.currentCategory.id, {category: vm.currentCategory}).then(function mySuccess(res) {
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

  vm.destroyCategory = function(category) {
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
      vm.currentCategory = angular.copy(category);
      categoryService.destroyCategory(vm.currentCategory.id).then(function mySuccess(res) {
        if (res.data.status) {
          $("#category-confirm-modal").modal("hide");
          toastr["success"]("Thành công");
          vm.refresh(false);
        } else {
          toastr["warning"]("Thất bại");
        }
      });
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
