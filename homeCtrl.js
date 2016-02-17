angular.module('devMtIn')
	.controller('homeCtrl', function($scope, profileService) {

		// $scope.myProfile = {
		// 	  name: ""
		// 	, friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
		// 	, likes: []
		// 	, favColor: []
		// };

		$scope.myProfile = profileService.checkForProfile();

		$scope.sortOptions = [{
			display: 'Ascending'
			, value: false
		}
		, {
			display: 'Descending'
			, value: true
		}]

		// profileService.serviceTest();

		$scope.editing = false;

		$scope.saveProfile = function(profile) {
			profileService.saveProfile(profile);
			$scope.editing = false;
		}

		$scope.deleteProfile = function() {
			profileService.deleteProfile();
			$scope.myProfile = profileService.checkForProfile();
		}
});
