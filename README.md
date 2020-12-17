# concat-large-files

This fork is an example about how to concat large files using Node.js and applying the worker threads for each file, aiming to see if it speed the concat time.

## Running

Restore dependencies with `npm ci`

1. There are the concatener in [./index.js](index.js) that will concat all `.csv` files and generate the `final.csv` file with all entries. It will convert data from csv, on `name` field it will replace spaces by underscore ( `_` ) then convert to csv again and finally save its output on `final.csv`.
2. Remember to create a folder called dataset, 'cause it's there where the script search for files to concat.

## Download files from Kaggle

2018: https://www.kaggle.com/stackoverflow/stack-overflow-2018-developer-survey?select=survey_results_public.csv
2017: https://www.kaggle.com/stackoverflow/so-survey-2017?select=survey_results_public.csv
