<div id="top"></div>

# Publishing the refinebio npm Package with Github Actions

Step-by-Step Guide for publishing the refinebio npm package with Github Actions

**Resources:**

:link: [npm Docs](https://docs.npmjs.com)  
:link: [Github Actions workflows Docs](https://docs.github.com/en/actions/using-workflows)

## Table of Contents

- [Prerequisite]()
- [Preparation]()
- [Step &#10102; Setup Authenticationt]()
  - [1) Generate an npm access token]()
  - [2) Add the npm access token to Github secrets]()
  - [Logout]()
- [Step &#10103; Setup Github Actions workflows]()
  - [1) Add a workflow directory and file in our local repository]()
  - [2) Configure a workflow]()
- [Step &#10104; Setup a new Github Release]()
  - [1) Create a tag for our local package release]()
  - [2) Create a new release to trigger the publish workflow]()

## Prerequisite

To use [Github Actions](https://github.com/features/actions), our local package must be hosted in [Github](https://github.com/).

## Preparation

> Registry data is immutable, ...once published, a package cannot change.

Before registering our local package to the [public npm registory](https://docs.npmjs.com/about-the-public-npm-registry), make sure that;

- all the configuration files are setup correctly.
- no credentials or any other sensitive information is included in an installable.
- a package is tested locally and bug free.

<details>
<summary>&horbar; package.json</summary>

To setup a package.json for an npm package, the following fields should be included as minimal:

**pakage.json**

```json
{
  "name": "@ccdl/refinebio",
  "version": "0.1.0",
  "description": "refinebio JS client.",
  "main": "index.js",
  "script": {},
  "dependencies": {},
  "repository": {
    "type": "git",
    "url": "https://github.com/AlexsLemonade/refinebio-js.git"
  },
  "keywords": ["refinebio", "refinebio-js", "refinebo JS client"],
  "contributors": [
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
}
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
  
[Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) with [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause) can be easily done in the Github repository:
- Create a new file and named `LICENSE` or `LICENSE.md`
- Select the [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause) template from the license picker provided by Github 
- Review and commit the LICENSE file

(For more information: [Adding a license to a repository](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository))

---

</details>

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step &#10102; Setup Authentication

### 1) Generate an npm access token

An npm access token must be provided to Github for authentication and it may be created using the [web](https://docs.npmjs.com/creating-and-viewing-access-tokens) or the [npm CLI](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-tokens-with-the-cli).

While generating the token;

- be sure to select the type of access token as **publish**
- save the token value(only visible at the time of creation)

### 2) Add the npm access token to Github secrets

Using the [web](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository), add a new secret and set its value to the npm access token we generated.

Upon creating a new secret, make sure to;

- follow the [naming rules](https://docs.github.com/en/actions/security-guides/encrypted-secrets#naming-your-secrets).
- prefix with **`NPM_`** as its common naming convention.

In our case, name it as `NPM_TOKEN`.

## Step &#10103; Setup Github Actions workflows

**(Basic Terminologies)**

<details>
<summary>&horbar; YMAL</summary>

> [YAML](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions) is a human-friendly data serialization language for all programming languages.

Github Ations workflows use YAML syntax to define a workflow configuration.

- A YAML file extension is either **.yml** or **.yaml**.
- Workflow files are stored in `.github/workflows` directory of a Github repository.

(For more information: [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions))

---

</details>

### 1) Add a workflow directory and file in our local repository

In the root of our local repository, create a `.github/workflows/NAME-OF-WORKFLOW.yml`.

- `NAME-OF-WORKFLOW` - a name of the workflow and should be self-explanatory

In our case, name it as `publish.yml` as below:

```
package.json
node_modules/
.github/
  workflows/
    publish.yml
```

### 2) Configure a workflow

We may configure [workflow triggers](https://docs.github.com/en/actions/using-workflows/triggering-a-workflow) using any supported [events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows).

- The [**`name`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#name) property is used to deifne the name of a workflow which will be used in our Github repository's [actions page](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-activity-for-a-workflow-run).
- The [**`on`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on) property is used to define the event. In our case, we use the [`release`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release) event to trigger a workflow to automatically publish the package when we [create a new release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release) in our Github repository. With that, the `Activity types` of the [`release`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release) event is set to `created`.
- The [**`jobs`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobs) property is used to define tasks to run when the workflow is triggered. In a workflow, we can any number of jobs which run in parallel. A [unique identifier](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_id) is assigned to each job and each job runs in a separate new instance of the virtual enviromnent specified by [`runs-on`](https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job).
- The [**`steps`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps) property is used to define a set of tasks to run in a job. Any number of steps can be added in a single job and those steps are excecuted in the order in which they are defined. A step can [run commands](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) using the operating system's shell and [use an action](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsuses). We can also assign a [`name`](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps) to each step to display in [actions page](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-activity-for-a-workflow-run).

The below workflow publishes our local package to the [public npm registry](https://docs.npmjs.com/about-the-public-npm-registry) upon a new release if [CI tests](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration) pass.

**publish.yml:**

```yaml
name: Publish npm package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
      - name: Clean install dependencies
        run: rm -rf node_modules/ && yarn install --frozen-lockfile
      - name: Publish the package
        run: yarn npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

## Step &#10104; Setup a new Github Release

### 1) Create a tag for our local package release

> A Git tag is similar to a [Git reference](https://docs.github.com/en/rest/git/refs), but the Git commit that it points to never changes. Git tags are helpful when you want to point to specific releases.

Every [`release`](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) is associated with its corresponding [tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging); that is, generally its [version number](https://semver.org).

There are two types of tags supported in Github:
|type||
|:--:|---|
|Lightweight| It is simply a pointer to a specific commit, is commonly used as a "bookmark", and is commonly used as private.|
|Annotated| It is stored as a full object in the Git database, contains additonal meta data(a tagger name, email, and date; can have a tagging message etc), and is commonly used for a public release of a project.|

**NOTE:** It’s generally recommended to create annotated tags so that we have all the information.

<br />

**&#10074; Create a new annotated tag in local**

In the root of our local repository, use the [`git tag -a <tagname> -m <msg>`](https://git-scm.com/docs/git-tag) command to create an annotated tag.

(by passing the flag [`-a`](https://git-scm.com/docs/git-tag#Documentation/git-tag.txt--a) or [`--annotate`](https://git-scm.com/docs/git-tag#Documentation/git-tag.txt--a) makes an unsigned annotated tag object)

e.g.) Creates the annotated tag, named as `v0.1.0` with the message "refinebio Release Version 1.0.0".

```
git tag -a v1.0.0 -m "refinebio Release Version 1.0.0"
```

<br />

**&#10074; Show tag data**

To see the tag data along with the commit that was tagged, use the [`git show <tagname>`](https://git-scm.com/docs/git-show) command:

```
git show v1.0.0
```

<br />

**&#10074; List tags**

The following command lists all the tags stored in our repository:

```
git tag
```

<br />

**&#10074; Share a tag to remote**

To share a tag in the local repository, we must explicitly push it the remote repository using the [`git push origin <tagname>`](https://git-scm.com/book/en/v2/Git-Basics-Tagging#_sharing_tags) command.

```
git push origin v1.0.0
```

To push all the local tags to the remote at once, use the `--tags` flag which will transfer all tags that are not already there.

```
git push origin --tags
```

### 2) Create a new release to trigger the publish workflow

Now we can create a new release using the [web](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release).

Once the first release is creaed in the Github repository, our publish workflow will be triggered and register our local package to the [public npm registory](https://docs.npmjs.com/about-the-public-npm-registry).

(TODO: test and add some details)
