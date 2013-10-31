'use strict';

angular.module('quakeStatsApp').
    filter('WeaponsFilter', function () {
        var resultToName = {
			1: 'SHOTGUN',
			2: 'GAUNTLET',
			3: 'MACHINEGUN',
			4: 'GRENADE',
			6: 'ROCKET',
			7: 'ROCKET SPLASH',
			8: 'PLASMA',
			9: 'PLASMA SPLASH',
			10: 'RAILGUN',
			11: 'LIGHTNING'
        };
        return function (input) {
            return resultToName[input];
        };
    });