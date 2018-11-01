"use strict";

angular.module("adminApp")
  .factory("categoryService", ["common", categoryService]);

function categoryService(common) {
  var service = {
    loadData: loadData,
    createCategory: createCategory,
    destroyCategory: destroyCategory,
    updateCategory: updateCategory
  }

  return service;

  function loadData(params) {
    return common.ajaxCall("GET", "/admins/categories", params);
  }

  function createCategory(params){
    return common.ajaxCall("POST", "/admins/categories", params);
  }

  function destroyCategory(id){
    return common.ajaxCall("DELETE", "/admins/categories/" + id);
  }

  function updateCategory(id, params){
   return common.ajaxCall("PUT", "/admins/categories/" + id, params);
  }
}
