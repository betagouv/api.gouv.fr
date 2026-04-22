# Mapping for kill

We are planning to close api.gouv.fr, the production website of this repository.

We are going to need a list of redirections to create from the current urls to the new pages in several new websites.

## List all routes

I'll need you to list all existing routes of api pages and guides only.

## Mapping the guides

Another colleague is doint this job by hand, no need to map them to new urls.

## Mapping the api pages

Currently the API pages have no content, only a search bar wich makes a search request on data.gouv.fr.

For all api pages of api.gouv.fr, I'll need you to make all corresponding search requests on data.gouv.fr, and pick the first result, and map it as the new page.

For example : 
- for https://api.gouv.fr/les-api/impot-particulier 
- request https://www.data.gouv.fr/api/2/dataservices/search/?q=API+Imp%C3%B4t+particulier
- the first result is slug: api-impot-particulier, id: 672cf984cbc098058850c092
- the final mapping is https://api.gouv.fr/les-api/impot-particulier -> https://www.data.gouv.fr/dataservices/672cf984cbc098058850c092

If there is no result, leave the new page empty in the mapping, and make me a summary of the not found at the end.


## Map github files

I want to add columns to the docs/api_mappings.csv and docs/guides_mapping.csv . The new column is "old_content", and comes second.
In this column, add a link to the file of the api or guide on github.