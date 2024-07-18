---
title: Interroger le portail data.bnf.fr par API
tagline: Vous souhaitez lister toutes les éditions du Médecin malgré lui de Molière ? Ce guide est fait pour vous
tags: sparql, spectacle, livre, edition
image: code.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API portail des données de la BnF - data.bnf.fr
---

La BnF met à disposition du public une [API SPARQL](/les-api/api-data-bnf-fr) qui permet d'interroger directement les ressources de <External href="https://data.bnf.fr/">data.bnf.fr</External>.

Pour commencer, rendez vous sur <External href="https://data.bnf.fr/sparql/">l'interface web de l'API SPARQL</External>.

## Cas pratique : lister toutes les éditions d‘un livre

Dans l'espace de requête, copiez-collez la requête suivante pour lister toutes les éditions du Médecin malgré lui de Molière. Puis cliquez sur le bouton triangulaire pour exécuter la requête :

```sql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX rdarelationships: <http://rdvocab.info/RDARelationshipsWEMI/>
PREFIX dcterms: <http://purl.org/dc/terms/>
SELECT DISTINCT ?edition ?titre ?date ?editeur ?URLGallica
WHERE {
<http://data.bnf.fr/ark:/12148/cb12258414j> foaf:focus ?oeuvre.
?edition rdarelationships:workManifested ?oeuvre.
OPTIONAL {
?edition dcterms:date ?date.
}
OPTIONAL {
?edition dcterms:title ?titre.
}
OPTIONAL {
?edition dcterms:publisher ?editeur.
}
OPTIONAL {
?edition rdarelationships:electronicReproduction ?URLGallica.
}
}
```

L'API renvoie toutes les éditions connues, avec le lien vers la version numérique dans Gallica, quand elle existe.

## Autre exemple : Lister tous les spectacles représentés dans une ville

Dans l'espace de requête, copiez-collez la requête suivante pour lister les spectacles représentés dans la ville de Bordeaux. Puis cliquez sur le bouton triangulaire pour exécuter la requête :

```sql
PREFIX schemaorg: <http://schema.org/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dcmitype: <http://purl.org/dc/dcmitype/>
SELECT DISTINCT ?s ?titre ?date
WHERE
{?s a dcmitype:Event;
schemaorg:location ?lieu;
dcterms:title ?titre;
dcterms:date ?date.

FILTER (REGEX (?lieu,"Bordeaux"))
}
```

### Description technique

Le modèle de données de data.bnf.fr est présenté dans <External href="https://data.bnf.fr/images/modele_donnees_2018_02.pdf">ce document.</External>

Il repose sur le modèle conceptuel de référence pour la structuration des données catalographiques en bibliothèque : IFLA LRM (Library Reference Model), défini par la Fédération internationale des associations de bibliothécaires et des bibliothèques (IFLA). Ce modèle  distingue notamment les œuvres des  expressions (une traduction, par exemple) et des manifestations (une édition précise d’un livre, par exemple).

Les vocabulaires et ontologies suivantes sont utilisées :

| Ontologie         | Description                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| rdf               | <External href="http://www.w3.org/1999/02/22-rdf-syntax-ns">En savoir plus</External>                   |
| rdfs              | <External href="http://www.w3.org/2000/01/rdf-schema">En savoir plus</External>                         |
| owl               | <External href="http://www.w3.org/2002/07/owl#">En savoir plus</External>                               |
| schemaorg         | <External href="https://schema.org/version/latest/schemaorg-current-http.ttl">En savoir plus</External> |
| ore               | <External href="http://www.openarchives.org/ore/terms/">En savoir plus</External>                       |
| skos              | <External href="http://www.w3.org/2004/02/skos/core">En savoir plus</External>                          |
| foaf              | <External href="http://xmlns.com/foaf/0.1/">En savoir plus</External>                                   |
| dcmitype          | <External href="http://purl.org/dc/dcmitype/">En savoir plus</External>                                 |
| dcterms           | <External href="http://purl.org/dc/terms">En savoir plus</External>                                     |
| frbr-rda          | <External href="http://rdvocab.info/uri/schema/FRBRentitiesRDA/">En savoir plus</External>              |
| rdaregistry       | <External href="http://www.rdaregistry.info/nt/Elements/u.nt">En savoir plus</External>                 |
| RDAgroup1elements | <External href="http://rdvocab.info/Elements/">En savoir plus</External>                                |
| RDAgroup2elements | <External href="http://rdvocab.info/uri/schema/FRBRentitiesRDA">En savoir plus</External>               |
| rdvocab           | <External href="http://RDVocab.info/Elements">En savoir plus</External>                                 |
| rdarelationships  | <External href="http://rdvocab.info/RDARelationshipsWEMI/">En savoir plus</External>                    |
| marcrel           | <External href="http://id.loc.gov/vocabulary/relators/">En savoir plus</External>                       |
| geo               | <External href="http://www.w3.org/2003/01/geo/wgs84_pos#">En savoir plus</External>                     |
| geonames          | <External href="http://www.geonames.org/ontology#">En savoir plus</External>                            |
| bio               | <External href="https://vocab.org/bio/">En savoir plus</External>                                       |
| bibo              | <External href="http://purl.org/ontology/bibo/">En savoir plus</External>                               |
| ign               | <External href="http://data.ign.fr/ontology/topo.owl#">En savoir plus</External>                        |
| insee             | <External href="http://rdf.insee.fr/geo/index.html">En savoir plus</External>                           |
| bnf-onto          | <External href="http://data.bnf.fr/ontology/bnf-onto/">En savoir plus</External>                        |
| bnfroles          | <External href="http://data.bnf.fr/vocabulary/roles/">En savoir plus</External>                         |
| isni              | <External href="http://isni.org">En savoir plus</External>                                              |

Les ressources sont identifiées par des URI construites à partir des ARK utilisés par les applications de la BnF :

```
Ex : http://data.bnf.fr/ark:/12148/cb11885977m#about
```

ARK, pour Archival ressource key, est un dispositif technique garantissant une pérennité des identifiants utilisés, indépendamment des systèmes d'information et des bases de données. Le préfixe "12148" identifie l'établissement BnF. La suite, non signifiante, identifie la même ressource sur toutes les applications BnF où elle apparaît.

```
Ex : ark:/12148/cb140094767
```

Les informations portées par un ARK suffixé par #about concernent les entités elles-mêmes, les choses du monde réel.
Les informations portées par un ARK non suffixé concernent les notices, les descriptions des entités.

Attention : les URI du triplestore sont : `http://` , et non `https://`
