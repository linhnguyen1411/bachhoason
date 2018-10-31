"use strict";

angular.module("adminApp")
  .factory("providerService", ["common", providerService]);

function providerService(common) {
  var service = {
    showData: showData,
    getData: getData,
    createData: createData,
    updateData: updateData,
    destroyData: destroyData
  }

  return service;

  function showData(id) {
    return common.ajaxCall("GET", "/admins/providers/" + id);
  }

  function getData() {
    return common.ajaxCall("GET", "/admins/providers");
  }

  function createData(params){
    return common.ajaxCall("POST", "/admins/providers", params);
  }

  function destroyData(id){
    return common.ajaxCall("DELETE", "/admins/providers/" + id);
  }

  function updateData(id, params){
   return common.ajaxCall("PUT", "/admins/providers/" + id, params);
  }
}
