    var app = angular.module("nom_application_angular", []);  //Le nom de l'application est spécifié ici

    app.controller("nom_controleur_angular", function($scope, $http) { //Le nom des contrôleurs sont déclarés de cette manière

    	$scope.utilisateur_actuel = "Administrateur"

    	$scope.index = 0;

    	$scope.champTri = "nom";

    	$scope.champs = [{'nomChamp':'nom'}, {'nomChamp':'prenom'}];

    	$scope.contacts =[
    		{
    			"id":$scope.index++,
    			"prenom":"Marc-Antoine",
    			"nom":"Bellavance",
    			"adresse":"205 boulevard Parent",
    			"ville":"St-Barthélémy",
    			"code_postal":"B9A2C3",
    			"actif":false
    		},
    		{	
    			"id":$scope.index++,
    			"prenom":"Françoise",
    			"nom":"Poirier",
    			"adresse":"650 avenue de la Station",
    			"ville":"Shawinigan",
    			"code_postal":"X9Y4C7",
    			"actif":true
    		},
    		{
    			"id":$scope.index++,
    			"prenom":"Christophe",
    			"nom":"Bellavance",
    			"adresse":"205 boulevard Parent",
    			"ville":"St-Barthélémy",
    			"code_postal":"B9A2C3",
    			"actif":true
    		}
    	];

    	$scope.toast = function(){let x = 4000;
    		if($scope.masquerInactifs){
    		Materialize.toast('Les contacts inactifs ont été masqués', 4000);
    		}
    		else{
    			Materialize.toast('Les contacts inactifs ne sont pas masqués', 4000);
    		}
    	}


$('#selectTri').on('change', function() {
            let x = $('#selectTri').val();
            $('#selectTri').val(x);
            console.log($('#selectTri').val());
            $scope.champTri = x;
            $scope.$apply();
            $('#selectTri').material_select();
        });


    	$scope.ajouter = function(){

    		let nouvelUtilisateur = {
    			"id":$scope.index++,
    			"nom": $scope.nouveauNom,
    			"prenom":$scope.nouveauPrenom,
    			"adresse":$scope.nouvelleAddresse,
    			"ville":$scope.nouvelleVille,
    			"code_postal":$scope.nouveauCP,
    			"actif":$scope.userActif
    		};

    		$scope.contacts.push(nouvelUtilisateur);

    		$scope.nouveauNom = "";
    		$scope.nouveauPrenom = "";
    		$scope.nouvelleAddresse = "";
    		$scope.nouvelleVille = "";
    		$scope.nouveauCP = "";
    		$scope.userActif = false;

    	}

    	$scope.supprimerContact = function(id_contact){
    		$scope.contacts = $scope.contacts = $.grep($scope.contacts, function(c){
    			return c.id != id_contact;
    		});
    		
    	}


		
  		$http.get("https://www.w3schools.com/angular/customers.php").then(function (response) {
        $scope.myData = response.data.records;
        console.log($scope.myData);
  		});

  		var req = {
			method: 'get',
	 		url: 'https://posttestserver.com/post.php',
	 		headers: {
	   		'Content-Type': undefined
 		},
 			data: { test: 'test'}
		}


		$http(req).then(function(response){console.log(response)}, function(){});


   });

