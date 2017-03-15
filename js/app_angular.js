    var app = angular.module("nom_application_angular", []);  //Le nom de l'application est spécifié ici

    app.controller("nom_controleur_angular", function($scope, $http) { //Le nom des contrôleurs sont déclarés de cette manière. Les services utilisés par le
                                                                       //contrôleur sont passés en paramètres ($scope, $http, $interval... voir d'autre services
                                                                       //créés séparément)
    	$scope.utilisateur_actuel = "Administrateur"                   //Déclaration de variable de scope. Toutes ces variables sont déclarées commes attribut au service $scope

    	$scope.index = 0;

    	$scope.champTri = "nom";

    	$scope.champs = [{'nomChamp':'nom'}, {'nomChamp':'prenom'}];

        $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/; //REGEX permettant de valider un email

    	$scope.contacts =[                                             //Array JSON contenant tous les contacts.
    		{                                                          //Dans le cadre d'une application réelle, la méthode la plus simple pour utiliser Angular
    			"id":$scope.index++,                                   //est de charger les données depuis la base de données et de les enregistrer en JSON en tant  
    			"prenom":"Alexandre",                                  //qu'attribut du scope.
    			"nom":"Wagner",
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
    			"prenom":"Zoé",
    			"nom":"Allard",
    			"adresse":"205 boulevard Parent",
    			"ville":"St-Barthélémy",
    			"code_postal":"B9A2C3",
    			"actif":true
    		}
    	];

    	$scope.toast = function(){let x = 4000;                                            //Déclaration de la fonction de scope "toast()", cette fonction pourra
    		if(!$scope.masquerInactifs){                                                    //Être appelée à l'intérieure d'une directive angular ou d'une expression
    		Materialize.toast('Les contacts inactifs ont été masqués', 4000);              //Angular en ignorant $scope (ex: ng-click="toast" ou {{toast()}}) 
    		}                                                                              //mais devra être appelée de la manière suivante "$scope.toast()" à l'intérieur
    		else{                                                                          //du fichier .js
    			Materialize.toast('Les contacts inactifs ne sont pas masqués', 4000);
    		}
    	}


        $('#selectTri').on('change', function() {                                           //Patch permettant au framework Materialize (Framework Front-End) d'actualiser
            let x = $('#selectTri').val();                                                  //la variable de scope.La variable de scope est actualisée normalement à l'intérieur d'un
            $('#selectTri').val(x);                                                         //SELECT si aucun Framework n'est utilisé.
            console.log($('#selectTri').val());
            $scope.champTri = x;
            $scope.$apply();
            $('#selectTri').material_select();
        });


    	$scope.ajouter = function(){                           //Ajout d'un utilisateur à l'Array JSON, la vue sera automatiquement mise à jour
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

    		$scope.nouveauNom = "";                           //Une fois l'utilisateur ajouté, les variables du modèle sont réinitialisées, ce qui aura
    		$scope.nouveauPrenom = "";                        //pour effet de vider les champs dans la vue.
    		$scope.nouvelleAddresse = "";
    		$scope.nouvelleVille = "";
    		$scope.nouveauCP = "";
    		$scope.userActif = false;

    	}

    	$scope.supprimerContact = function(id_contact){                                        //Suppression du contact dans l'Array JSON, la vue sera automatiquement
    		$scope.contacts = $scope.contacts = $.grep($scope.contacts, function(c){           //mise à jour
    			return c.id != id_contact;
    		});
    		
    	}




        /*
        ---------------------------------------------------------------------------------
        ---------------------------------- ÉVÈNEMENTS -----------------------------------
        ---------------------------------------------------------------------------------
         */
        

        $scope.modifierStyle = function(event){
            $("#"+event).addClass("eventFired"); //Transition vers couleur verte
            setTimeout(function (){
            $("#"+event).addClass("removeEvent");
            }, 100);

            setTimeout(function (){
                                 $("#"+event).removeClass("removeEvent");
                                 $("#"+event).removeClass("eventFired");
            }, 200)
        }

        $scope.modifierStyleHalf = function(event){

             $("#"+event).addClass("eventFired"); //Transition vers couleur verte

        }

        $scope.releaseStyle = function(event){


            $("#"+event).addClass("removeEvent");

            setTimeout(function (){
                                 $("#"+event).removeClass("removeEvent");
                                 $("#"+event).removeClass("eventFired");
            }, 200)

        }


        /*
        ---------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------
        */
		
  		$http.get("https://www.w3schools.com/angular/customers.php").then(function (response) { //Exemple de requête utilisant le service $http
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

