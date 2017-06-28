
# Comment utiliser ce script ?

Il est nécéssaire d'importer dans son code le script inclut dans le fichier <kbd>maps.js</kbd>

Ensuite, il faut configurer ce script dans son code. Il faut simplement rajouter la ligne suivante :

``` html 
<div class="google-map" data-marker="TRUE/FALSE" data-marker-icon="MARKER FILE" data-center-lat="XX.XXXX" data-center-lng="XX.XXXX" data-zoom="XX"></div>
```

Vous trouverez plusieurs points de configuration :

*   <kbd>bool</kbd> **data-marker** : Permet de modifier le marqueur Google Maps par défaut <kbd>option : true / false</kbd>.
*   <kbd>string</kbd> **data-marker-icon** : Si <kbd>data-marker="true"</kbd>, indiquer le chemin vers le fichier image du marqueur.
*   <kbd>float</kbd> **data-center-lat** : Latitude de l'emplacement à afficher.
*   <kbd>float</kbd> **data-center-lng** : Longitude de l'emplacement à afficher.
*   <kbd>float</kbd> **data-zoom** : valeur du zoom sur la carte.

Une fois cette configuration effectué, il faut définir une hauteur (height) afin d'afficher la carte. Dans cet exemple, la hauteur est défini dans la classe css <kbd>.google-map</kbd>.

**BONUS** Vous pouvez configurer la couleur via JavaScript. Je ne détaillerais pas ce point, libre à vous de regarder le bout de code suivant :

``` js

window.mapStyleData = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 20
        }]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 40
        }]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "saturation": -10
        },
        {
            "lightness": 30
        }]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "simplified"
        },
        {
            "saturation": -60
        },
        {
            "lightness": 10
        }]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "simplified"
        },
        {
            "saturation": -60
        },
        {
            "lightness": 60
        }]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "off"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 60
        }]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "off"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 60
        }]
    }];

```