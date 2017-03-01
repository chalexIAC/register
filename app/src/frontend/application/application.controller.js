(function () {
    'use strict'

    angular
        .module('application')
        .controller('applicationController', [
            '$state',
            ApplicationController
        ]);

    function ApplicationController($state) {
        var self = this;
        this.goLogon = function () {
            $state.go('application.logon');
        };
        this.goRoot = function () {
            $state.go('application');
        }
    };
})()