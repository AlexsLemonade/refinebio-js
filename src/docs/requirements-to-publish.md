<div id="top"></div>

# Publishing npm Packages with Github Pakages Registry

Step-by-Step Guide for Publishing npm Packages with Github Packages

**Resources:**<br/>

:link: [Github Packages Docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)<br />
:link: [npm Docs](https://docs.npmjs.com)<br />
:link: [Docker Docs](https://docs.docker.com)

<details open>
<summary><h4>Table of Contents</h4></summary>

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
  </details>

## Prerequisite

<details>
<summary><h3>&#10112; Create a Personal Access Token(PAT)</h3></summary>

:link: [Create a Personal Acess Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

> a personal access token (PAT) to authenticate to GitHub Packages or the GitHub API.

<details>
<summary>&horbar; Permissons for Github Packages</summary>

| Scope             | Description                                                                    | Permission     |
| ----------------- | ------------------------------------------------------------------------------ | -------------- |
| `read:packages`   | Download and install packages from GitHub Packages                             | read           |
| `write:packages`  | Upload and publish packages to GitHub Packages                                 | write          |
| `delete:packages` | Delete packages from GitHub Packages                                           | admin          |
| `repo`            | Upload and delete packages (along with `write:packages`, or `delete:packages`) | write or admin |

(For more information: [About permissions for GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries))

</details>

At a minimum, **repo**, **read**, **write** permissions are necessary to use the PAT for developing packages.

</details>

<details>
<summary><h3>&#10113; Edit ~/.npmrc(per-user)</h3></summary>

<details>
<summary>&horbar; npmrc files</summary>

npmrc files are runtime configuration used by Node.js which can be utilized to optimize a development workflow and have four file types.

|                                            Type                                            | Path                  |                                                                                    |
| :----------------------------------------------------------------------------------------: | --------------------- | ---------------------------------------------------------------------------------- |
| [per-project](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#per-project-config-file) | /project/**.npmrc**   | It must be stored in the root of a project and only applies to that project        |
|    [per-user](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#per-user-config-file)    | ~/**.npmrc**          | It's stored in the user's home directory and overwrite a global npmrc settings     |
|      [global](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#global-config-file)      | $PREFIX/etc/**npmrc** | It's an ini-file formatted list accessed with `--global` or `-g` flag via Terminal |
|    [builtin](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#built-in-config-file)     | path/to/npm/**npmrc** | It's an unchangeble 'builtin' file used by npm                                     |

(For more infromation: [npmrc](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc) or view the manual via Terminal, run `npm help npmrc`)

</details>
    
**1 ) Open and edit ~/.npmrc**
  
The [npm config](https://docs.npmjs.com/cli/v8/commands/npm-config) command opens a per-user .npmrc(by default) or creates a new one if it doesn't exist:
```
npm config edit 
```
**2 ) Add the Github Package registry and the PAT**
  
> `//<hostname>/:authoToken` are auth that is restricted to the registry host specified

Add the following and save the config file:

```
//npm.pkg.github.com/:_authToken=TOKEN
```

</details>
  
<p align="right">(<a href="#top">back to top</a>)</p>  
  
---
  
## Step &#10102; Setting up a npm Package
  
<details>
<summary>&horbar; npm Package naming</summary>
 
A package name must;
- be lowercase and my contain hyphens
- be greater than zeroand less than or equal to 214 characters  
- not contain any non-URL-safe characters
- not start with . or _ unless it's a scoped package
- not contain any spaces  
- not contain `~)('!*` characters
- not be the same as a node.js/io.js core module or a reserved/blacklisted name

(For more information: [npm Package name guidelines](https://docs.npmjs.com/package-name-guidelines), [validate-npm-package-name](https://www.npmjs.com/package/validate-npm-package-name), [name field in package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#name))

---

</details>  
  
<details>
<summary>&horbar; Semantic Versioning(SemVar)</summary>
 
#### &#10074; Official(Normal) Release Version
**Schema:** MAJOR.MINOR.PATCH

<img width="318" alt="image" src="https://user-images.githubusercontent.com/31800566/181130537-13e28335-2d28-4737-8b0b-4ce476977a85.png">

| MAJOR                           | MINOR                                   | PATCH                         |
| :------------------------------ | :-------------------------------------- | :---------------------------- |
| Making incompatible API changes | Adding a new non-breaking functionality | Making a non-breaking bug fix |

**Spec:**

- X, Y, and Z are non-negative integers
- X cannot contain a leading zero
- A version number increases from 0-9 to 1.0
- As a version number increases, all the numbers to the right start back from 0.
- Once a versioned package has been released, any updates have to be released as a new version

#### &#10074; Beta Version

**Schema:** 0.MINOR.PATCH

A package with a **MAJOR** version 0 is considered to be unstable and to be before an official release.

<img width="224" alt="image" src="https://user-images.githubusercontent.com/31800566/181129636-cb62a522-fb4c-489e-b262-3202a43c972d.png">

#### &#10074; Pre-release Version

**Schema:** extensions to the MAJOR.MINOR.PATCH

**Spec:**

- It can be denoted by appending a hyphen and a series of dot-separated identifiers immediately following the patch version.
- Only ASCII alphanumerics and hyphens [0-9A-Za-z-] are allowed
- Identifiers cannot be empty

e.g.) 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92, 1.0.0-x-y-z.–.

(For more information: [Semantic Versioning v2](https://semver.org/))

---

</details>

<details>
<summary>&horbar; package.json</summary>

To setup a package.json for the npm package, the following fields should be included as minimal:

#### &#10074; Required fields

|                                      Field                                      | Value                                                       |
| :-----------------------------------------------------------------------------: | ----------------------------------------------------------- |
|    [`name`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#name)    | a name of the package and its scope                         |
| [`version`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#version) | a value _x.y.z_ following the [SemVer](https://semver.org/) |

#### &#10074; Other fields

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

e.g.)

```
{
  "name": "@scope/pakage-name",
  "version": "1.0.0",
  "description": "A package for ....",
  "main": "index.js",
  "script": {
     "start": "...",
     "build": "..."
  },
  "dependencies" :  {...},
    "repository": {
    "type": "git",
    "url": "https://github.com/monatheoctocat/my_package.git"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/socope/pakage-name.git"
  },
  "keywords": [‘keyword1’, 'keyword2', 'keyword3'],
  "contributors" : [
    {
       "name": "contributors1",
       "email": "..."
    },
    {
       "name": "contributors2",
       "email": "..."
    }
 ],
 "license": "ISC",
 "bugs": {
    "url": "https://github.com/scope/pakage-namee/issues"
  },
 "homepage": "https://github.com/scope/pakage-name"
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
  
<details>
<summary><h3>&#10112; Initalize a npm Project and Github Repository</h3></summary>
 
**1 ) Create a project directory and initialize npm**
  
We can pass the `-y` or `-yes` flag to [`npm init`](https://docs.npmjs.com/cli/v8/commands/npm-init) for skipping prompts:
```
mkdir project-name && cd project-name && npm init -y   
```  
  
**2 ) Create a new repository on Github** 
  
:link: [Creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

- A repository name should match with the package name
- Initiaize git locally and add this newly created remote url to the local repository
</details>

<details>
<summary><h3>&#10113; Setup a Local Testing Environment with Docker</h3></summary>

(Comming soon)

</details>  
</details>

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step &#10103; Publishing a npm Package

**NOTE:** GitHub Packages **only supports scoped npm packages**. Similar to publishing scoped packages directly to the npm registry, it uses the format of `@owner/name` to define the scope of the package. The scope is the account holder either can be the name of the user or organization account that owns the repository.

<details open>
<summary><h3>&#10112; Publish a npm Package</h3></summary>
  
> By default, GitHub Packages publishes a package in the GitHub repository you specify in the name field of the package.json file.   
 
There are multiple ways in which we can publish a package.   
  
<details>
<summary><h4>Option 1 &horbar; Using command line</h4></summary>   
  
#### 1 ) Open and edit a per-project .npmrc
> i.e. a sibling of `node_modules` and `package.json`   
  
  To open and edit a per-project .npmrc, use the <code>--location <global/user/<strong>proejct</strong>></code> flag:
```
npm config edit --location project  
```  
Specify GitHub Packages URL and its scope by adding the following line(No authToken!).
- `OWNER` - the name of a user or an organization of the repository containing the project
```
@OWNER:registry=https://npm.pkg.github.com
```
  
#### 2 ) Push .npmrc file to the root of the Github repository
```
git add . && git commit -m "add local .npmrc" && push origin repo-name(or branch-name)
```  
  
#### 3 ) Verify the `name` and `repisitory` fields in package.json 
- `OWNER` -  the name of a user or an organization of the repository containing the project
- `PACKAGE_NAME` -  the package name
- `REPO-NAME` - the repository name containing the project
  
|Field|Value|
|---|---|
|`name`|`@OWNER/PACKAGE_NAME` - must contain the scope and the name of the package|  
|`repository`|`https://github.com/OWNER/REPO-NAME.git` - must match the GitHub repository URL containing the project|

#### 4 ) Publish the package

- Before running the [`npm publish`](https://docs.npmjs.com/cli/v8/commands/npm-publish) command, make sure everything is correct.

```
npm publish
```

Once the package is successfully published, it will output similar to the following:

<pre>
npm notice 
npm notice 📦  @OWNER/PACKAGE_NAME@1.0.0
npm notice === Tarball Contents === 
...
<strong>npm notice Publishing to https://npm.pkg.github.com</strong>
+ @OWNER/PACKAGE_NAME@1.0.0 
</pre>

As seen in the above, the package was published to the Github Packages registry and not to [npm public registry](https://docs.npmjs.com/cli/v8/using-npm/registry).

### With package.json

Alternatively, we can add the registry information to [`publishConfig`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#publishconfig) field in the package.json

```
// package.json

"publishConfig": {
  "registry":"https://npm.pkg.github.com"
},
```

---

</details>  
  
<details>
<summary><h4>Option 2 &horbar;Using Github Action workflows</h4></summary>  
  
<details>
<summary>&horbar; Github Token Secret</summary>  
  
> GitHub provides a token that you can use to authenticate on behalf of GitHub Actions.
  
A temporary unique `GITHUB_TOKEN` secret will be auto-generated by Github at the beginning of every workflow run and can be used for authentication. However, its permissions are limited to the repository that contains that workflow and it expires upon the job completion or within 24 hours.

To reference the `GITHUB_TOKEN` in a workflow, we can use the string interpolation `${{ secrets.GITHUB_TOKEN }}`  
(For more information: [Automatic token authentication](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow))

---

</details>  
 
(In Progress)  
</details>    
</details>  
   
<details>
<summary><h3>&#10113; Test the published npm Package</h3></summary>  
 
Once the npm package is published, we should test it to make sure that it's avialable to be installed.
 
#### 1 ) Create an empty npm project to which we want to install our package

```
mkdir test && cd test && npm init -y
```

#### 2 ) Open and edit per-project .npmrc

```
npm config edit --location project
```

Specify the GitHub Packages URL and its scope in a test/.npmrc file by adding the following and save the config:

- `OWNER` - the name of a user or an organization of the repository containing the project

```
@OWNER:registry=https://npm.pkg.github.com
```

#### 3 ) Install the package

We can visit the package page in our repository to grab the installation scripts.

Install from the command line:

```
npm install @freshcapsule/github-package-test@1.0.0
```

OR

In the package.json, add the package as its `dependenies` and then run the `npm install` in Terminal:

```
// package.json
 "dependencies": {
    "@freshcapsule/github-package-test": "^1.0.0"
 }
```

</details>  
  
<p align="right">(<a href="#top">back to top</a>)</p>
