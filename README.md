<div id="top"></div>

[![contributor: 2](https://img.shields.io/badge/contributors-2-9cd)](#)
[![formatter: prettier](https://img.shields.io/badge/formatter-prettier-ff69b4)](https://github.com/prettier/prettier)
[![license: BSD-3-Clause](https://img.shields.io/badge/license-BSD--3--Clause-green)](https://opensource.org/licenses/BSD-3-Clause)

# Refine.bio JS

This is a Javascript API client for Refine.bio

> Refine.bio is a multi-organism collection of genome-wide transcriptome or gene expression data that has been obtained from publicly available repositories and uniformly processed and normalized. Refine.bio allows biologists, clinicians, and machine learning researchers to search for experiments from different source repositories all in one place and build custom data sets for their questions of interest.

## Links

Here are the addtional resources for Refine.bio API.

- [Refine.bio API (v1) ReDoc](https://api.refine.bio/v1/)
- [Refine.bio API (v1) Swagger UI](https://api.refine.bio/v1/swagger/)
- [Refine.bio Documentation](https://docs.refine.bio/en/latest/)

## Table of contents

- [Links](#links)
- [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [Add Refine.bio API](#add-refinebio-api)
- [Usage](#usage)
- [REST API](#rest-api)
  - [Available Actions](#available-actions)
  - [Resources](#resources)
- [Contribution](#contribution)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [License](#license)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Built With

We use the npm package [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) which supports an API request for both Node.js and a browser.

### Add Refine.bio API

To add Refine.bio API, go to the root directory of your project and run the following command:

```sh
yarn add refinebio
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

Import `Refinebio` module into your Javascript file and instantiate it.

```js
import Refinebio from 'refinebio'

const api = Refinebio()
```

This newly created instance `api` returns the following properties:
| key| value |
| :--- | :--- |
| `updateConfig` | A method for accessing or updating the config object |
| [resourceName](#resources) | methods for each resource |

To use `updateConfig` method:

```js
// access the config
const config = api.updateConfig()

// update the config
const updateConfiog = api.updateConfig({ verbose: true })
```

To use one of the resouces:

```js
const tokenRequest = await api.token.create({ is_activated: true })

if (tokenRequest.isOkay) {
  console.log('TokenRequest resolved')
}
```

<p align="right">(<a href="#top">back to top</a>)</p>

## REST API

### Available Actions

Our API supports the following actions:
| Action | Description |
| :--- | :--- |
| `create` | sends a POST request and returns a new instance |
| `get` | sends a GET request and returns a single object |
| `filter` | sends a GET resuest and returns a list of objects(maybe paginated) |
| `update` | sends a PUT request and returns a single object |
| `delete` | sends a DELETE request |

- `create` takes an object as its payload
- `get` takes an identifier or a filter object as its URL parameter
- `filter` takes a filter object as its URL parameter
- `update` takes an object as its payload
- `delete` takes an identifiier as its URL parameter

### Resources

<details open>
  <summary> List of resources</summary>
  
 * [**compendia**](#compendia)
 * [**computational_results**](#computational_results)
 * [**computedFiles**](#computedFiles)
 * [**dataset**](#dataset)
 * [**experiments**](#experiments)
 * [**institutions**](#institutions)
 * [**jobs**](#jobs)
 * [**organisms**](#organisms)
 * [**originalFiles**](#originalFiles)
 * [**platforms**](#platforms)
 * [**processors**](#processors)
 * [**qnTargets**](#qnTargets)
 * [**samples**](#samples)
 * [**search**](#search)
 * [**statsAbout**](#statsAbout)
 * [**stats**](#stats)
 * [**token**](#token)
 * [**transcriptomeIndices**](#transcriptomeIndices)
</details>

---

#### compendia

This resource can be used to get the compendia result. This may return a specific compendia result by its corresponding identifier or a list of all compendia results with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `compendia_read` | [view](https://api.refine.bio/v1/#operation/compendia_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `compendia_list` | [view](https://api.refine.bio/v1/#operation/compendia_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific compendia result
  const getCompendia = await api.compendia.get(ID)
  
  // get a list of all compendia results
  const getCompendiaList = await api.compendia.filter(query)
  ```

</details>

---

#### computationalResults

This resource can be used to get the computational result. This may return a specific computational result by its corresponding identifier or a list of all computational results with filtering.

Each one contains meta-information about the output of a computer process. This can also return valid S3 urls if a valid token is sent in the header `HTTP_API_KEY`.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `computational_results_read` | [view](https://api.refine.bio/v1/#operation/computational_results_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `computational_result_list` | [view](https://api.refine.bio/v1/#operation/computational_results_list) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
// get a specific computational result
const getComputationalResult = await api.computational_results.get(ID)

// get a list of all computational results
const getComputationalResults = await api.computationalResults.filter(query)
```

</details>

---

#### computedFiles

This resource can be used to get the computed file. This may return a specific computed file by its corresponding identifier or a list of all computed files with filtering.

ComputedFiles are representation of files created by refinebio processes. It's possible to download each one of these files by providing a valid token. To
acquire and activate an API key see the documentation for the [token](#token) endpoint.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `computed_files_read` | [view](https://api.refine.bio/v1/#operation/computed_files_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `computed_files_list` | [view](https://api.refine.bio/v1/#operation/computed_files_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific computed file
  const getComputedFile = await api.computedFiles.get(ID)
  
  // get a list of all computed files
  const getComputedFiles = await api.computedFiles.filter(query)
  ```

</details>

---

#### dataset

This resource can be used to create, get, or update a single dataset.

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `create` | [view](https://api.refine.bio/v1/#operation/dataset_create) | [view](https://api.refine.bio/v1/swagger/) |
| `get` | [view](https://api.refine.bio/v1/#operation/dataset_read) | [view](https://api.refine.bio/v1/swagger/) |
| `update` | [view](hhttps://api.refine.bio/v1/#operation/dataset_update) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
// create a dataset
const createDataset = async() => await api.dataset.create({})

// get a dataset
const getDataset = async() => await api.dataset.get(ID)

// update a dataset
const updateDataset = async() api.dataset.update(tokenID, {})
```

</details>

---

#### experiments

This resource can be used to get the experiment. This may return a specific experiment by its corresponding accession code or a paginated list of all experiments with advanced filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `experiments_read` | [view](https://api.refine.bio/v1/#operation/experiments_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `experiments_list` | [view](https://api.refine.bio/v1/#operation/experiments_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific experiment
  const getExperiment = await api.experiments.get(accessionCode)
  
  // get a list of all experiments
  const getExpriments = await api.experiments.filter(query)
  ```
  
</details>

---

#### institutions

This resource can be used to get an unpaginated list of all the available "institution" information.

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `get` | [view](https://api.refine.bio/v1/#tag/institutions) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
const getInstitutions = async () => await api.institutions.get()
```

</details>

---

#### jobs

This resource can be used to get the downloader, processor, or survery job. This may return a specific job by its corresponding identifier or a list of jobs by its job type with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `jobs_downloader_read` | [view](https://api.refine.bio/v1/#operation/jobs_downloader_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `jobs_downloader_list` | [view](https://api.refine.bio/v1/#operation/jobs_downloader_list) | [view](https://api.refine.bio/v1/swagger/) |
| `get` | `jobs_processor_read` | [view](https://api.refine.bio/v1/#operation/jobs_processor_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `jobs_processor_list` | [view](https://api.refine.bio/v1/#operation/jobs_processor_list) | [view](https://api.refine.bio/v1/swagger/) |
| `get` | `jobs_survey_read` | [view](https://api.refine.bio/v1/#operation/jobs_survey_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `jobs_survey_list` | [view](https://api.refine.bio/v1/#operation/jobs_survey_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
 
  ```js  
  // get a specific downloader job
  const getDownloaderJob = await api.jobs.get('downloader', id)
  
  // get a list of downloader jobs
  getDownloaderJobs = await api.jobs.filter('downloader', query)
  
  // get a specific processor job
  const getProcessorJob = await api.jobs.get('processor', id)
  
  // get a list of processor jobs
  getProcessorJobs = await api.jobs.filter('processor', query)
  
  // get a specific servey job
  const getSurveyJob = await api.jobs.get('survey', id)
  
  // get a list of survey jobs
  getSurveyJobs = await api.jobs.filter('survey', query)
  ```
  
</details>

---

#### organisms

This resource can be used to get the organism. This may return an organism by its name or a paginated list of all available organisms with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `organisms_read` | [view](https://api.refine.bio/v1/#operation/organisms_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `organisms_list` | [view](https://api.refine.bio/v1/#operation/organisms_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific organism
  const getOrganism = await api.organisms.get(name)
  
  // get a list of all available organisms
  const getOrganisms = await api.organisms.filter(query)
  ```
</details>

---

#### originalFiles

This resource can be used to get the original files. This may return a specific original file by its corresponding identifier or a list of all original files that are associated with samples with filtering.

These are the files we proccess.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `original_files_read` | [view](https://api.refine.bio/v1/#operation/original_files_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `original_files_list` | [view](https://api.refine.bio/v1/#operation/original_files_list) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
// get a specific original file
const getOriginalFile = await api.originalFiles.get(ID)

// get a list of all original files
const getOriginalFiles = await api.originalFiles.filter(query)
```

</details>

---

#### platforms

This resource can be used to get an unpaginated list of all available "platform" information.

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `get` | [view](https://api.refine.bio/v1/#tag/platforms) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  const getPlatforms = await api.platforms.get()
  ```
</details>

---

#### processors

This resource can be used to get the processor. This may return a specific processor by its corresponding identifier or a list of all processors with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `processors_read` | [view](https://api.refine.bio/v1/#operation/processors_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `processors_list` | [view](https://api.refine.bio/v1/#operation/processors_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific processor
  const getProcessor = await api.processors.get(ID)
  
  // get a list of all processors
  const getProcessors = await api.processors.filter(query)
  ```
</details>

---

#### qnTargets

This resource can be used to get the organisms which have available QN Targets. This may return a detailed view of the Quantile Normalization file for an organism by its name or a list of all organisms with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `qn_targets_read` | [view](https://api.refine.bio/v1/#operation/qn_targets_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `qn_targets_list` | [view](https://api.refine.bio/v1/#operation/qn_targets_list) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
// get a Quantile Normalization file for an organism
const getQnTarget = await api.qnTargets.get(name)

// get a list of all organisms with available QN Targets
const getOrganismsWithQnTargets = await api.qnTargets.filter(query)
```

</details>

---

#### samples

This resource can be used to get the detailed information about the sample. This may return a specific sample information by its corresponding accession code or a list of all sample details with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `samples_read` | [view](https://api.refine.bio/v1/#operation/samples_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `samples_list` | [view](https://api.refine.bio/v1/#operation/samples_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific sample
  const getQnTarget = await api.qn_targets.get(accessionCode)
  // get a list of all samples
  const getOrganismsWithQnTargets = await api.qn_targets.filter(query)
  ```
</details>

---

#### search

This resource can be used to search among the experiments.

This is powered by ElasticSearch, information regarding advanced usages of the filters can be found in the [Django-ES-DSL-DRF docs](https://django-elasticsearch-dsl-drf.readthedocs.io/en/0.17.1/filtering_usage_examples.html#filtering).

There's an additional field in the response named `facets` that contain stats on the number of results per filter type.

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `filter` | [view](https://api.refine.bio/v1/#tag/search) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
const getSearchResults = await api.search.filter(query)
```

</details>

---

#### statsAbout

This resource can be used to get the general statistics for the site used in the about page.

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `get` | [view](https://api.refine.bio/v1/#tag/stats-about) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  const getStatsAbout = await api.statsAbout.get()
  ```
</details>

---

#### stats

This resource can be used to get the statistics about the health of the system.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `stats_list` | [view](https://api.refine.bio/v1/#operation/stats_list) | [view](https://api.refine.bio/v1/swagger/) |
| `get` | `stats_failures_downloader_list` | [view](https://api.refine.bio/v1/#operation/stats_failures_downloader_list) | [view](https://api.refine.bio/v1/swagger/) |
| `get` | `sstats_failures_processor_list` | [view](https://api.refine.bio/v1/#operation/stats_failures_processor_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get stats on the health of the system.
  const getStatsOnHealth = await api.stats.get()
  
  // get stats on a failures downloader list
  const getFailureDownloader = await api.stats.get('downloader')
  
  // get stats on a failures processor list
  const getFailureProcessor = await api.stats.get('processor')
  ```
  
</details>

---

#### token

This resource can be used to create, get, or update a token. The token can be used in requests that provide urls to download computed files. Setting `is_activated` to true indicates agreement with Refine.bio's [Terms of Use](https://www.refine.bio/terms) and [Privacy Policy](https://www.refine.bio/privacy).

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `create` | [view](https://api.refine.bio/v1/#operation/token_create) | [view](https://api.refine.bio/v1/swagger/) |
| `get` | [view](https://api.refine.bio/v1/#operation/token_read) | [view](https://api.refine.bio/v1/swagger/) |
| `update` | [view](https://api.refine.bio/v1/#operation/token_update) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // create a new token
  const createToken = async() => await api.token.create({ is_activated: true })
  
  // get a specific token
  const getToken = async() => await api.token.get(tokenID)
  
  // update a specific token's active state
  const updateToken = async() api.token.update(tokenID, { is_activated: true })
  ```
  
</details>

---

#### transcriptomeIndices

This resource can be used to get the detailed information about a sample. This may return a S3 url associated with the organism and length, along with other metadata about the transcriptome index we have stored, or a list of all Transcriptome Indice with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `get` | `transcriptome_indices_read` | [view](https://api.refine.bio/v1/#operation/transcriptome_indices_read) | [view](https://api.refine.bio/v1/swagger/) |
| `filter` | `transcriptome_indices_list` | [view](https://api.refine.bio/v1/#operation/transcriptome_indices_list) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
// get a S3 url associated with the transcriptome index
const getS3Url = await api.transcriptome_indices.get(id)

// get a list of all transcriptome Indices
const getTranScruptomeIndices = await api.transcriptome_indices.filter(query)
```

</details> 
 
<p align="right">(<a href="#top">back to top</a>)</p>

## Contribution

Let's collaborate with us! Any contributions would be greatly appreciated. Please share your idea by making a pull request.

### Prerequisites

This project requires [NodeJS](http://nodejs.org/) (version 17 or later) and [Yarn](https://yarnpkg.com/).
<br />To make sure you have them available on your machine, run the following command:

```sh
$ yarn -v && node -v
1.22.18
v17.8.0
```

### Installation

**BEFORE INSTALLING:** please read the [prerequisites](#prerequisites)

1. Clone this repository on your local machine

```sh
$ https://github.com/AlexsLemonade/refinebio-js.git
$ cd refinebio-js
```

2. Install dependencies

```sh
$ yarn install
```

3. Create a new feature branch

```sh
$git checkout -b feature/your-branch-name
```

4. Commit your changes

```sh
$git commit -m 'add describe your feature'
```

5. Push to the branch on remote

```sh
$git push origin feature/your-branch-name
```

6. Open a new pull request via Github

### Development

#### Recompile on changes

```sh
$ yarn dev
```

#### Run the tests

```sh
$ yarn test
```

#### Lint the code

```sh
$ yarn lint
```

#### Build a distribution version

This script will generate a distribution version of the project
in your local `dist/` folder.

```sh
$ yarn build
```

<p align="right">(<a href="#top">back to top</a>)</p>

## License

[The 3-Clause BSD License](https://opensource.org/licenses/BSD-3-Clause)

<p align="right">(<a href="#top">back to top</a>)</p>
