var app = angular.module('buildupApp', ['ngMaterial', 'buildupApp.widgets', 'treeControl',
  'ngRoute','ngDialog', 'ngCookies', 'md.data.table','pascalprecht.translate'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
      .when("/", {templateUrl: "./widgets/dataStorage/dataStorage.html", controller:"DataStorageCtrl"})
    //  .when("/googleDrive", {templateUrl: "./widgets/googleDrive/googleDrive.html", controller:"GoogleDriveCtrl"})
      .when("/login", {templateUrl: "./widgets/login/login.html", controller: "LoginCtrl"})
      .otherwise({ redirectTo: '/' });
}]);

app.run(['$rootScope', '$location', 'Auth','$timeout','$http','$translate',
  function ($rootScope, $location, Auth, $timeout, $http,$translate) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    $rootScope.dataStorageMode = undefined;
    if (!Auth.isLoggedIn()) {
      $location.path('/login');
    }
    else if(next.templateUrl == "./widgets/login/login.html"){
      $location.path('/');
    }
    else {
      var updateProjectAfterUserUpdated =  function(){$timeout(function(){
        $http.get('/projects/user/' + $rootScope.user.id).then(function(projects){
          $translate.use($rootScope.user.preference.language_key || 'en');
          $rootScope.projects = projects.data;
        });
      }, 100);}

      Auth.updateUser(updateProjectAfterUserUpdated);
      $http.defaults.headers.common.Authorization = 'Bearer ' + $rootScope.user.token;
    }
  });
}]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('buildupPaletteName', {
    '50': 'e8c630',
    '100': 'e8c630',
    '200': 'e8c630',
    '300': 'e8c630',
    '400': 'e8c630',
    '500': 'e8c630',
    '600': 'e8c630',
    '700': 'e8c630',
    '800': 'e8c630',
    '900': 'e8c630',
    'A100': 'e8c630',
    'A200': '454637',
    'A400': '454637',
    'A700': '454637',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100',
      '200', '300', '400','A100'],
    'contrastLightColors':  'A100'
  });
  $mdThemingProvider.theme('default')
      .primaryPalette('buildupPaletteName', {
        'default': 'A700',
        'hue-1': 'A700',
        'hue-2': '600',
        'hue-3': 'A700'
      })
      .accentPalette('buildupPaletteName', {
        'default': 'A700'
      });
});

angular.module('buildupApp.widgets', []);