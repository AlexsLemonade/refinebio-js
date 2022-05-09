<div id="top"></div>

[![contributor: 2](https://img.shields.io/badge/contributors-2-9cd)](#)
[![formatter: prettier](https://img.shields.io/badge/formatter-prettier-ff69b4)](https://github.com/prettier/prettier)
[![license: BSD-3-Clause](https://img.shields.io/badge/license-BSD--3--Clause-green)](https://opensource.org/licenses/BSD-3-Clause)

# refine.bio JS

This is a Javascript API client for [refine.bio](https://www.refine.bio/).

## What is refine.bio?

<img width="1808" alt="image" src="https://user-images.githubusercontent.com/31800566/166490678-d5f05080-5aff-40dc-bcd0-a657675e6b17.png">

> refine.bio is a multi-organism collection of genome-wide transcriptome or gene expression data that has been obtained from publicly available repositories and uniformly processed and normalized. refine.bio allows biologists, clinicians, and machine learning researchers to search for experiments from different source repositories all in one place and build custom data sets for their questions of interest.

## Links

Here are the addtional resources for refine.bio API.

- [refine.bio API (v1) ReDoc](https://api.refine.bio/v1/)
- [refine.bio API (v1) Swagger UI](https://api.refine.bio/v1/swagger/)
- [refine.bio Documentation](https://docs.refine.bio/en/latest/)

## Table of contents

- [What is refine.bio?](#what-is-refinebio)
- [Links](#links)
- [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [Add refine.bio API](#add-refinebio-api)
- [Usage](#usage)
- [REST API](#rest-api)
  - [Available Actions](#available-actions)
  - [Resources](#resources)
- [Contributing](#contributing)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [License](#license)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Built With

We use the npm package [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) which supports an API request for both Node.js and a browser.

### Add refine.bio API

To add refine.bio API, go to the root directory of your project and run the following command:

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

To override refine.bio API default [`config`](#config) settings upon instantiation:

```js
const api = Refinebio({ verbose: true })
```

This newly created instance `api` returns the following properties:
| key| value |
| :--- | :--- |
| `updateConfig` | A method for accessing or updating the `config` object |
| [resourceName](#resources) | Methods for each resource |

To use `updateConfig` method:

```js
import Refinebio from 'refinebio'

const api = Refinebio()

// access the config
const config = api.updateConfig()

// update the config
const updateConfiog = api.updateConfig({ verbose: true })
```

To use one of the resouces:

```js
import Refinebio from 'refinebio'

const api = Refinebio()

const tokenRequest = await api.token.create({ is_activated: true })

if (tokenRequest.isOkay) {
  console.log('TokenRequest resolved')
}
```

#### `Config`

The following properties can be overridden:
| key| value | Description |
| :--- | :--- | :--- |
| `path` | urlString | refine.bio API Url consists of host and API version number. |
| `verbose` | boolean | By setting this option to true, it logs endpoints for each resrouce in terminal when an HTTP request is made. The default value is false. |

<p align="right">(<a href="#top">back to top</a>)</p>

## REST API

### Available Actions

Our API supports the following actions:
| Action | Description |
| :--- | :--- |
| `create` | sends a POST request and returns a new instance |
| `get` | sends a GET request and returns a single object |
| `filter` | sends a GET resuest with a query string and returns a list of objects(maybe paginated) |
| `update` | sends a PUT request and returns a single object |
| `remove` | sends a DELETE request |

- `create` takes an object as its payload
- `get` takes an identifier as its URL parameter
- `filter` takes a filter object as its URL parameter
- `update` takes an object as its payload
- `remove` takes an identifiier as its URL parameter

### Resources

<details open>
  <summary> List of resources</summary>
  
 * [**compendia**](#compendia)
 * [**computationalResults**](#computationalresults)
 * [**computedFiles**](#computedfiles)
 * [**dataset**](#dataset)
 * [**experiments**](#experiments)
 * [**institutions**](#institutions)
 * [**jobs**](#jobs)
 * [**organisms**](#organisms)
 * [**originalFiles**](#originalfiles)
 * [**platforms**](#platforms)
 * [**processors**](#processors)
 * [**qnTargets**](#qntargets)
 * [**samples**](#samples)
 * [**search**](#search)
 * [**statsAbout**](#statsabout)
 * [**stats**](#stats)
 * [**token**](#token)
 * [**transcriptomeIndices**](#transcriptomeindices)
</details>

---

#### compendia

This resource can be used to get the compendia result. This may return a specific compendia result by its corresponding identifier or a list of all compendia results with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `compendia.get` | `compendia_read` | [view](https://api.refine.bio/v1/#operation/compendia_read) | [view](https://api.refine.bio/v1/swagger/) |
| `compendia.filter` | `compendia_list` | [view](https://api.refine.bio/v1/#operation/compendia_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific compendia result
  const getCompendia = Refinebio().compendia.get(id)
  
  // get a list of all compendia results
  const getCompendiaList = await Refinebio().compendia.filter(query)
  ```

</details>

---

#### computationalResults

This resource can be used to get the computational result. This may return a specific computational result by its corresponding identifier or a list of all computational results with filtering.

Each one contains meta-information about the output of a computer process. This can also return valid S3 urls if a valid token is sent in the header `HTTP_API_KEY`.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `computationalResults.get` | `computational_results_read` | [view](https://api.refine.bio/v1/#operation/computational_results_read) | [view](https://api.refine.bio/v1/swagger/) |
| `computationalResults.filter` | `computational_result_list` | [view](https://api.refine.bio/v1/#operation/computational_results_list) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
// get a specific computational result
const getComputationalResult = await Refinebio().computationalResults.get(id)

// get a list of all computational results
const getComputationalResults = await Refinebio().computationalResults.filter(
  query
)
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
| `computedFiles.get` | `computed_files_read` | [view](https://api.refine.bio/v1/#operation/computed_files_read) | [view](https://api.refine.bio/v1/swagger/) |
| `computedFiles.filter` | `computed_files_list` | [view](https://api.refine.bio/v1/#operation/computed_files_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific computed file
  const getComputedFile = await Refinebio().computedFiles.get(id)
  
  // get a list of all computed files
  const getComputedFiles = await Refinebio().computedFiles.filter(query)
  ```

</details>

---

#### dataset

This resource can be used to create, get, or update a single dataset.

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `dataset.create` | [view](https://api.refine.bio/v1/#operation/dataset_create) | [view](https://api.refine.bio/v1/swagger/) |
| `dataset.get` | [view](https://api.refine.bio/v1/#operation/dataset_read) | [view](https://api.refine.bio/v1/swagger/) |
| `dataset.update` | [view](hhttps://api.refine.bio/v1/#operation/dataset_update) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
// create a dataset
const createDataset = async() => await Refinebio().dataset.create({})

// get a dataset
const getDataset = async() => await Refinebio().dataset.get(id)

// update a dataset
const updateDataset = async() Refinebio().dataset.update(tokenID, {})
```

</details>

---

#### experiments

This resource can be used to get the experiment. This may return a specific experiment by its corresponding accession code or a paginated list of all experiments with advanced filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `experiments.get` | `experiments_read` | [view](https://api.refine.bio/v1/#operation/experiments_read) | [view](https://api.refine.bio/v1/swagger/) |
| `experiments.filter` | `experiments_list` | [view](https://api.refine.bio/v1/#operation/experiments_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific experiment
  const getExperiment = await Refinebio().experiments.get(accessionCode)
  
  // get a list of all experiments
  const getExpriments = await Refinebio().experiments.filter(query)
  ```
  
</details>

---

#### institutions

This resource can be used to get an unpaginated list of all the available "institution" information.

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `institutions.filter` | [view](https://api.refine.bio/v1/#tag/institutions) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
const getInstitutions = async () => await Refinebio().institutions.filter(query)
```

</details>

---

#### jobs

This resource can be used to get the downloader, processor, or survery job. This may return a specific job by its corresponding identifier or a list of jobs by its job type with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `jobs.get.downloader` | `jobs_downloader_read` | [view](https://api.refine.bio/v1/#operation/jobs_downloader_read) | [view](https://api.refine.bio/v1/swagger/) |
| `jobs.filter.downloader` | `jobs_downloader_list` | [view](https://api.refine.bio/v1/#operation/jobs_downloader_list) | [view](https://api.refine.bio/v1/swagger/) |
| `jobs.get.processor` | `jobs_processor_read` | [view](https://api.refine.bio/v1/#operation/jobs_processor_read) | [view](https://api.refine.bio/v1/swagger/) |
| `jobs.filter.processor` | `jobs_processor_list` | [view](https://api.refine.bio/v1/#operation/jobs_processor_list) | [view](https://api.refine.bio/v1/swagger/) |
| `jobs.get.survey` | `jobs_survey_read` | [view](https://api.refine.bio/v1/#operation/jobs_survey_read) | [view](https://api.refine.bio/v1/swagger/) |
| `jobs.filter.survey` | `jobs_survey_list` | [view](https://api.refine.bio/v1/#operation/jobs_survey_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
 
  ```js  
  // get a specific downloader job
  const getDownloaderJob = await Refinebio().jobs.get.downloader(id)
  
  // get a list of downloader jobs
  getDownloaderJobs = await Refinebio().jobs.filter.downloader(query)
  
  // get a specific processor job
  const getProcessorJob = await Refinebio().jobs.get.processor(id)
  
  // get a list of processor jobs
  getProcessorJobs = await Refinebio().jobs.filter.processor(query)
  
  // get a specific servey job
  const getSurveyJob = await Refinebio().jobs.get.survey(id)
  
  // get a list of survey jobs
  getSurveyJobs = await Refinebio().jobs.filter.survey(query)
  ```
  
</details>

---

#### organisms

This resource can be used to get the organism. This may return an organism by its name or a paginated list of all available organisms with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `organisms.get` | `organisms_read` | [view](https://api.refine.bio/v1/#operation/organisms_read) | [view](https://api.refine.bio/v1/swagger/) |
| `organisms.filter` | `organisms_list` | [view](https://api.refine.bio/v1/#operation/organisms_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific organism
  const getOrganism = await Refinebio().organisms.get(name)
  
  // get a list of all available organisms
  const getOrganisms = await Refinebio().organisms.filter(query)
  ```
</details>

---

#### originalFiles

This resource can be used to get the original files. This may return a specific original file by its corresponding identifier or a list of all original files that are associated with samples with filtering.

These are the files we proccess.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `originalFiles.get` | `original_files_read` | [view](https://api.refine.bio/v1/#operation/original_files_read) | [view](https://api.refine.bio/v1/swagger/) |
| `originalFiles.filter` | `original_files_list` | [view](https://api.refine.bio/v1/#operation/original_files_list) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
// get a specific original file
const getOriginalFile = await Refinebio().originalFiles.get(id)

// get a list of all original files
const getOriginalFiles = await Refinebio().originalFiles.filter(query)
```

</details>

---

#### platforms

This resource can be used to get an unpaginated list of all available "platform" information.

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `platforms.filter` | [view](https://api.refine.bio/v1/#tag/platforms) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  const getPlatforms = await Refinebio().platforms.filter(query)
  ```
</details>

---

#### processors

This resource can be used to get the processor. This may return a specific processor by its corresponding identifier or a list of all processors with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `processors.get` | `processors_read` | [view](https://api.refine.bio/v1/#operation/processors_read) | [view](https://api.refine.bio/v1/swagger/) |
| `processors.filter` | `processors_list` | [view](https://api.refine.bio/v1/#operation/processors_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific processor
  const getProcessor = await Refinebio().processors.get(id)
  
  // get a list of all processors
  const getProcessors = await Refinebio().processors.filter(query)
  ```
</details>

---

#### qnTargets

This resource can be used to get the organisms which have available QN Targets. This may return a detailed view of the Quantile Normalization file for an organism by its name or a list of all organisms with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `qnTargets.get` | `qn_targets_read` | [view](https://api.refine.bio/v1/#operation/qn_targets_read) | [view](https://api.refine.bio/v1/swagger/) |
| `qnTargets.filter` | `qn_targets_list` | [view](https://api.refine.bio/v1/#operation/qn_targets_list) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
// get a Quantile Normalization file for an organism
const getQnTarget = await Refinebio().qnTargets.get(name)

// get a list of all organisms with available QN Targets
const getOrganismsWithQnTargets = await Refinebio().qnTargets.filter(query)
```

</details>

---

#### samples

This resource can be used to get the detailed information about the sample. This may return a specific sample information by its corresponding accession code or a list of all sample details with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `samples.get` | `samples_read` | [view](https://api.refine.bio/v1/#operation/samples_read) | [view](https://api.refine.bio/v1/swagger/) |
| `samples.filter` | `samples_list` | [view](https://api.refine.bio/v1/#operation/samples_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get a specific sample
  const getQnTarget = await Refinebio().samples.get(accessionCode)
  // get a list of all samples
  const getOrganismsWithQnTargets = await Refinebio().samples.filter(query)
  ```
</details>

---

#### search

This resource can be used to search among the experiments with advanced filtering.

This is powered by ElasticSearch, information regarding advanced usages of the filters can be found in the [Django-ES-DSL-DRF docs](https://django-elasticsearch-dsl-drf.readthedocs.io/en/0.17.1/filtering_usage_examples.html#filtering).

There's an additional field in the response named `facets` that contain stats on the number of results per filter type.

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `search.filter` | [view](https://api.refine.bio/v1/#tag/search) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
const getSearchResults = await Refinebio().search.filter(query)
```

</details>

---

#### statsAbout

This resource can be used to get the general statistics for the site used in the about page.

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `statsAbout.get` | [view](https://api.refine.bio/v1/#tag/stats-about) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  const getStatsAbout = await Refinebio()api.statsAbout.get()
  ```
</details>

---

#### stats

This resource can be used to get the statistics about the health of the system.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `stats.get` | `stats_list` | [view](https://api.refine.bio/v1/#operation/stats_list) | [view](https://api.refine.bio/v1/swagger/) |
| `stats.filter.downloader` | `stats_failures_downloader_list` | [view](https://api.refine.bio/v1/#operation/stats_failures_downloader_list) | [view](https://api.refine.bio/v1/swagger/) |
| `stats.filter.processor` | `sstats_failures_processor_list` | [view](https://api.refine.bio/v1/#operation/stats_failures_processor_list) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // get stats on the health of the system.
  const getStatsOnHealth = await Refinebio().stats.get()
  
  // get stats on a failures downloader list
  const getFailureDownloader = await Refinebio().stats.filter.downloader()
  
  // get stats on a failures processor list
  const getFailureProcessor = await Refinebio().stats.filter.processor()
  ```
  
</details>

---

#### token

This resource can be used to create, get, or update a token. The token can be used in requests that provide urls to download computed files. Setting `is_activated` to true indicates agreement with refine.bio's [Terms of Use](https://www.refine.bio/terms) and [Privacy Policy](https://www.refine.bio/privacy).

Please view the API documentation for more details.
| Action | ReDoc | SwaggerUI |
| :--- | :--- | :--- |
| `token.create` | [view](https://api.refine.bio/v1/#operation/token_create) | [view](https://api.refine.bio/v1/swagger/) |
| `token.get` | [view](https://api.refine.bio/v1/#operation/token_read) | [view](https://api.refine.bio/v1/swagger/) |
| `token.update` | [view](https://api.refine.bio/v1/#operation/token_update) | [view](https://api.refine.bio/v1/swagger/) |

<details> 
  <summary>Example</summary>
  
  ```js
  // create a new token
  const createToken = async() => await Refinebio().token.create({ is_activated: true })
  
  // get a specific token
  const getToken = async() => await Refinebio().token.get(tokenID)
  
  // update a specific token's active state
  const updateToken = async() Refinebio().token.update(tokenID, { is_activated: true })
  ```
  
</details>

---

#### transcriptomeIndices

This resource can be used to get the detailed information about a sample. This may return a S3 url associated with the organism and length, along with other metadata about the transcriptome index we have stored, or a list of all Transcriptome Indice with filtering.

Please view the API documentation for more details.
| Action | Type | ReDoc | SwaggerUI |
| :--- | :--- | :--- | :--- |
| `transcriptomeIndices.get` | `transcriptome_indices_read` | [view](https://api.refine.bio/v1/#operation/transcriptome_indices_read) | [view](https://api.refine.bio/v1/swagger/) |
| `transcriptomeIndices.filter` | `transcriptome_indices_list` | [view](https://api.refine.bio/v1/#operation/transcriptome_indices_list) | [view](https://api.refine.bio/v1/swagger/) |

<details>
  <summary>Example</summary>

```js
// get a S3 url associated with the transcriptome index
const getS3Url = await Refinebio().transcriptomeIndices.get(id)

// get a list of all transcriptome Indices
const getTranScruptomeIndices = await Refinebio().transcriptomeIndices.filter(
  query
)
```

</details> 
 
<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

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
