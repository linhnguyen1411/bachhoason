"use strict";

angular.module("adminApp")
  .factory("catalogService", ["common", catalogService]);

function catalogService(common) {
  var service = {
    loadData: loadData,
    createData: createData,
    updateData: updateData,
    destroyData: destroyData
  }

  return service;

  function loadData(params) {
    return common.ajaxCall("GET", "/admins/catalogs", params);
  }

  function createData(params){
    return common.ajaxCall("POST", "/admins/catalogs", params);
  }

  function destroyData(id){
    return common.ajaxCall("DELETE", "/admins/catalogs/" + id);
  }

  function updateData(id, params){
   return common.ajaxCall("PUT", "/admins/catalogs/" + id, params);
  }
}
