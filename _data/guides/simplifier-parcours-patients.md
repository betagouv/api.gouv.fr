---
title: Simplifier le parcours des patients en récupérant leur attestation de droits
tagline: Vous êtes un établissement de santé ? Facilitez le parcours de vos patients grâce à l'API de droits de l'Assurance Maladie
tags: cas usage, api droits, patients, assurance, cnam, santé
image: droits.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API de droits à l'Assurance Maladie
  - API FranceConnect

---

L'API Droits de l'Assurance Maladie permet aux personnes identifiées via FranceConnect d'éviter de fournir une attestation de droits au cours de leur parcours de soin.

<Quote logo="/images/guides/aphp.jpeg" who='Assistance Publique - Hôpitaux de Paris'>
En moyenne en 2022, **nous simplifions le parcours de 130 patients par jour**, qui n'ont plus à fournir leur attestation. Ce chiffre va augmenter car de plus en plus de patients utilisent FranceConnect.
</Quote>

## Avantages pour les patients

### Le parcours avant

1. Je me connecte sur le portail de l'Assurance Maladie,
2. Je recherche mon attestation de droits,
3. Je télécharge le document,
4. J'envoie mon attestation de droits à l'établissement de soin.

### Le parcours après

1. Lors de ma pré-inscription, je m'identifie via FranceConnect,
2. Je consens au partage de mes données (CNAM, attestation de droits),
3. ✅ C'est terminé, mon attestation a été transmise directement à l'établissement.

## Avantages pour l'établissement de santé

**☑️ Les informations sont certifiées** par l'Assurance Maladie (CNAM)

⏱ **C'est plus rapide**, car il n'y a pas de documents à vérifier

🔖 **Il n'y a plus de validation de document à la main à effectuer** ni d'archivage de documents papier.

🖥 La circulation de données directement entre les systèmes d'information permet **d'éviter les saisies manuelles, les erreurs ou fautes de frappes.**

🔐 **C'est aussi plus sécurisé**, grâce à l'authentification via FranceConnect et car les données ne sont pas stockées par l'établissement.

## Comment récupérer l'attestion de droits ?

Pour récupérer automatiquement l'attestation de droits, il faut utiliser une API : il s'agit du moyen d'accéder aux données provenant de la CNAM.

👉 Vous travaillez avec un éditeur pour votre portail patients ? Contactez-le pour qu'il intègre l'API.

<br/>
<Button href="https://datapass.api.gouv.fr/api-droits-cnam">Remplir une demande</Button>

## En savoir plus sur les données renvoyées par l'API

🔍 Accédez à la [fiche descriptive de l'API droits de l'Assurance Maladie](/les-api/api_ameli_droits_cnam#donnees)
