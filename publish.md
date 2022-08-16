<div id="top"></div>

# Publishing the refinebio npm Package

Step-by-Step Guide for Publishing a npm Package for refinebio JS client

**Resources:**<br/>
:link: [npm Docs](https://docs.npmjs.com)

## Table of Contents

- [Prerequisite](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#prerequisite)
  - [&#10112; Create a Personal Access Token(PAT)](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#-create-a-personal-access-tokenpat)
  - [&#10113; Edit ~/.npmrc(per-user)](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#-edit-npmrcper-user)
- [Step 1: Setting up a npm Package](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#step--setting-up-a-npm-package)
  - [&#10112; Initalize a npm Project and Github Repository](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#-initalize-a-npm-project-and-github-repository)
  - [&#10113; Setup a Testing Environment with Docker](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#-setup-a-local-testing-environment-with-docker)
- [Step 2: Publishing a npm Package](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#step--publishing-a-npm-package)
  - [&#10112; Publish a npm Package](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#-publish-a-npm-package)
    - [Option 1: Using command line](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#step--publishing-a-npm-package)
    - [Option 2: Using Github Action workflows](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#option-2-using-github-action-workflows)
  - [&#10113; Test the published npm Package](https://github.com/freshcapsule/how-to-publish-npm-packages/edit/main/publish.md#-test-the-published-npm-package)

## Prerequisite

Before publishing to [the public npm registory](https://docs.npmjs.com/about-the-public-npm-registry), make sure that;

- all the configuration files are setup correctly.
- no credentials or any other sensitive information is included in an installable.
- a package is tested locally and bug free.

<details>
<summary>&horbar; package.json</summary>

To setup a package.json for the npm package, the following fields should be included as minimal:

**&#10074; Required fields**

|                                      Field                                      | Value                                                       |
| :-----------------------------------------------------------------------------: | ----------------------------------------------------------- |
|    [`name`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#name)    | a name of the package and its scope                         |
| [`version`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#version) | a value _x.y.z_ following the [SemVer](https://semver.org/) |

**&#10074; Other fields**

|                                                     Field                                                     | Value                                                                                                                               |
| :-----------------------------------------------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------- |
|           [`description`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#description-1)           | a desription of the package in string format and will be listed in `npm search`                                                     |
|                   [`main`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#main)                   | a path to an entry file of the package and by default `index.js`                                                                    |
|                [`script`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#scripts)                 | necessary scripts to run and manage the lifecycle of the package                                                                    |
|             [`repository`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#repository)             | a remote url of the package repository                                                                                              |
|               [`keywords`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#keywords)               | keywords of the package in an array of strings and will be listed in `npm search`                                                   |
| [people fields](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#people-fields-author-contributors) | either `author`(a single person) or `contributors`(2 or more) which includes `name` and optionally `email` and `url` of each author |
|                   [`bugs`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#bugs)                   | a url to the repository issue tracker and / or an email address for reporting issues                                                |
|                [`license`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#license)                | a license for the package                                                                                                           |
|               [`homepage`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#homepage)               | a url to the package homepage, typically the README                                                                                 |

```
{
  "name": "@ccdl/refinebio-js",
  "version": "0.1.0",
  "description": "refinebio JS client.",
  "main": "index.js",
  "script": { ... },
  "dependencies" :  { ... },
  "repository": {
    "type": "git",
    "url": "https://github.com/AlexsLemonade/refinebio-js.git"
  },
  "keywords": ['refinebio', ‘refinebio-js’, 'refinebo JS client'],
  "contributors" : [
    {
       "name": "davidsmejia",
       "email": "...@ccdatalab.org"
    },
    {
       "name": "nozomione",
       "email": "...@ccdatalab.org"
    }
 ],
 "license": "BSD-3-Clause",
 "bugs": {
    "url": "https://github.com/AlexsLemonade/refinebio-js/issues"
  },
 "homepage": "https://github.com/AlexsLemonade/refinebio-js"
```

(For more information: [Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file), [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json))

---

</details>

<details>
<summary>&horbar; README.md</summary>

> Your README file may include directions for installing, configuring, and using the code in your package, as well as any other information a user may find helpful.

Necessary information to be included:

- Project name and its description
- Package configuration and instructions
- Repository license
- Contribution guidelines

(For more information: [About package README files](https://docs.npmjs.com/about-package-readme-files), [About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes), [Basic Markdown Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax))

---

</details>

<details>
<summary>&horbar; LICENSE file</summary>
 
> You can include an open source license in your repository to make it easier for other people to contribute.
  
To add a LICENSE file can be easily done via Github Web Interface:
- Create a new file and name it as `LICENSE` or `LICENSE.md`
- Select a license template from the list provided by Github 
- Commit the LICENSE file

(For more information: [Adding a license to a repository](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository))

---

</details>

<p align="right">(<a href="#top">back to top</a>)</p>
