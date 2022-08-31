<div id="top"></div>

# Package Management with npm

> npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development

:link: [npm Docs](https://docs.npmjs.com)

Step-by-Step Guide for publishing and managing npm packages to the [public npm registry](https://docs.npmjs.com/about-the-public-npm-registry).

**NOTE:** [Node.js](https://nodejs.org/en/) and the [npm CLI](https://docs.npmjs.com/cli/v8/configuring-npm/install) are required.

## Table of Contents

[Step 1: Setup npm Accounts]()

- [&#10102; Create npm User Accounts]()
- [&#10103; Register an Organization]()
- [&#10104; Manage Teams and Members]()

[Step 2: Register a npm Package]()

- [Option 1 &horbar; Using command line]()
- [Option 2 &horbar; Using Github Actions workflows]()

[Step 3: Manage the npm Package]()

- [&#10102; Test a npm Package Locally]()
- [&#10103; Release a new version]()

## Step 1: Setup npm Accounts

**(Basic Terminologie)**

<details>
<summary>&horbar; Information to get started</summary>

We need to prepare the following information prior to signing up for a new npm account.
|Field|Value|
|---|---|
|Username<br/><sup>(Required)</sup>|All lowercase letters and can contains digits and hyphens|  
|Email Address<br/><sup>(Required)</sup>|Registered email address is **public** and it'll be:<br /> - added to the metadata of our packages.<br/>- visible to anyone who downloads our package.<br/>- used by npm for email notifications|
|Password<br/><sup>(Required)</sup>|At least 10 characters with [Lastpass](https://www.lastpass.com) and is required [2FA](https://docs.npmjs.com/configuring-two-factor-authentication) configuration with Yubikey.<br/>(For more information: [Creating a strong password](https://docs.npmjs.com/creating-a-strong-password))|
|Orgniazation Name<br/><sup>(Required)</sup>|All lowercase letters and can contains digits and hyphens.It cannot be the same as the `Username`|  
|Billing Information<br/><sup>(Optional)</sup>|It required for [paid accounts](https://www.npmjs.com/products) and for using [private packages](https://docs.npmjs.com/about-private-packages)|

---

</details>

<details>
<summary>&horbar; Package visibility and scopes</summary>
  
> Unscoped packages are always public. Private packages are always scoped. Scoped packages are private by default;

We'll be publishing and managing the **scoped public packages**. An organization sopced package are private by defailt. Thus, to publish our packages to the npm registry, we'll need to explicitely set thier visibility to **public**.
|Visibility|Namespace|Cost||
|:---:|:---:|:---:|---|  
|Public|global,<br/>User,<br/>**Organization**|Free| A [public package](https://docs.npmjs.com/about-public-packages) may be unscoped or scoped and is visible to everyone.<br/>- Unscoped public packages belong to the global public registry namespace<br/>- Scoped public packages belong to a user or an organization namespace|
|Private|User,<br/>**Organization**|Monthly Paid Subscription|A [private package](https://docs.npmjs.com/about-private-packages) belongs to a user or an organization namespace and is only visible to its account owner and its organization and selected collaborators.|

(For more information: [About scopes](https://docs.npmjs.com/about-scopes), [Packages scope access level and visibility](https://docs.npmjs.com/package-scope-access-level-and-visibility))

---

</details>

<details>
<summary>&horbar; Organizational user roles</summary>

Each role can be assigned to multiple users, whereas a single user cannot have multiple roles.

There are three organizational user roles:
|Role|Permisson|
|:---:|---|
|Owner|who has all privileges and are responsible for managing organization members and billing|
|Admin|who is responsible for managing the team membership and package access|
|Member|who is merely responsible for creating and publishing packages|

(For more information: [Organization roles and permissions](https://docs.npmjs.com/organization-roles-and-permissions))

---

</details>

### &#10102; Create npm User Accounts

:link: [Creating a new user account on the public registry](https://docs.npmjs.com/creating-a-new-npm-user-account)

#### 1 ) Create the CCDL User Account for an Organization

Once the organization is created(i.e. an **Organization Name** will be added to this account), this account will be;

- an **Owner user**(non-reassignable).
- automatically added as a member of the default team [**developers**](https://docs.npmjs.com/about-developers-team) which is irremovable.

(For this CCDL account, the **Username** named as `ccdl-npm`.)

#### 2 ) Create User Accounts for Collaborators

**Username**
: should be a Github contributor's username of our repository.<br/>
**Email Address**
: should be either an email address associated with the above Github account or `<name>@ccdatalab.org`

Each account will be used for either;

- an **Owner user** who manages the organizational tasks including bullings
- an **Admin user** who manages team and package access in the organization.
- a **Member user** who creates and publishes packages within the organizational scope.

### &#10103; Register an Organization

Depending on the needs, there are two ways in which we can create an organization.

<details>
<summary><strong>Option 1 &horbar; Add an organization to a newly created user account</strong></summary>

:link: [Create an Organization](https://docs.npmjs.com/creating-an-organization)

#### 1 ) Add an Organization to the CCDL user account

The Organization Name;

- cannot be changed once it's created.
- will be used as an <strong>organizational scope</strong>.

(For this CCDL account, the **Orgnization Name** named as `ccdl`.)

#### 2 ) Select an Account Plan

A **free** account will be sufficient, if publishing only scoped **public** packages with a minimal team management. Otherwise, the **Team** product would be suitable.

**NOTE:** The account plan can be [upgraded](https://docs.npmjs.com/upgrading-to-a-paid-organization-plan) or [downgraded](https://docs.npmjs.com/downgrading-to-a-free-organization-plan) at anytime.

#### 3 ) Invite Members <sup>(optional)</sup>\*\*

We can invite a person to be a member of our organization using an existing **npm username** or an **email adress**(it can also be a non-npm email address). The invitation will be sent out via an email which is revokable and expires in 7 days.

Once the invitation has been accepted, we can reassign a different role or a team to that newly added member.

- A single user can belong to multiple teams or no team.
- Each role can be assigned to multiple users, whereas a single user cannot have multiple roles.

**IMPORTANT:** For the paid organization, adding a new member costs $7 per /mo for each new member.

---

</details>
  
<details>
<summary><strong>Option 2 &horbar; Converting an already exsisting user account to an organization</strong></summary>
  
:link: [Converting your user account to an organization](https://docs.npmjs.com/converting-your-user-account-to-an-organization)

The steps will be similar to **Option 1** except we'll need to come up with a new **Username** for this exsisting account, since this **Username** will be now used as an **Organization Name**.

</details>

### &#10104; Manage Teams and Members

Managing teams and memberships in the orgnization can be done using the web or the npm CLI.

**Note:** A user must be **Admin user** to manage teams and packages.

<details>
<summary><strong>Option 1 &horbar; Using web interface</strong></summary><br/>
      
**&#10074; Managing Members**
  
- [Add Members](https://docs.npmjs.com/adding-members-to-your-organization) 
- [Managing User Permission](https://docs.npmjs.com/managing-organization-permissions) 
- [Remove Members](https://docs.npmjs.com/removing-members-from-your-organization)
  
<br/>  
  
**&#10074; Managing Teams** 
  
We can create and manage our custom teams: 
- [Creating Teams](https://docs.npmjs.com/creating-teams)
- [Removing Teams](https://docs.npmjs.com/removing-teams)  
- [Adding Team Memmbers](https://docs.npmjs.com/adding-organization-members-to-teams) 
- [Removing Team Members](https://docs.npmjs.com/removing-organization-members-from-teams)  
- [Managing Team Access to Packages](https://docs.npmjs.com/managing-team-access-to-organization-packages)
 
--- 
</details>

<details>
<summary><strong>Option 2 &horbar; Using command line</strong></summary><br/>

By using [`npm team`](https://docs.npmjs.com/cli/v8/commands/npm-team) command, we can manage teams. However, no support for managing package permissions.

</details>

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step 2: Register a npm Package

**(Basic Terminologie)**

<details>
<summary>&horbar; npmrc files</summary>

npmrc files are runtime configuration used by Node.js which can be utilized to optimize a development workflow and have four file types.

|                                            Type                                            | Path                  |                                                                                |
| :----------------------------------------------------------------------------------------: | --------------------- | ------------------------------------------------------------------------------ |
| [per-project](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#per-project-config-file) | /project/**.npmrc**   | It must be stored in the root of a project and only applies to that project    |
|    [per-user](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#per-user-config-file)    | ~/**.npmrc**          | It's stored in the user's home directory and overwrite a global npmrc settings |
|      [global](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#global-config-file)      | $PREFIX/etc/**npmrc** | It's a global setting accessed with `--global` or `-g` flag via Terminal       |
|    [builtin](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#built-in-config-file)     | path/to/npm/**npmrc** | It's an unchangeble 'builtin' file used by npm                                 |

**NOTE:** All npm config files are an ini-formatted list of `key = value` parameters.

(For more infromation: [npmrc](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc) or view the manual via Terminal, run `npm help npmrc`)

---

</details>

<details>
<summary>&horbar; npm Access token</summary>

> An access token is a hexadecimal string that you can use to authenticate, and which gives you the right to install and/or publish your modules.

An [access token](https://docs.npmjs.com/about-access-tokens)(a hexadecimal string with an identifiable prefix `_npm`) can be used for authentication instead of using a npm username and password.

The npm CLI will auto-generate an temporary access token upon running the [`npm login`](https://docs.npmjs.com/cli/v8/commands/npm-adduser) command or we can [create our custom access token](https://docs.npmjs.com/creating-and-viewing-access-tokens) to privde a third-party temporary access to our npm packages.

There is three token types:
|Type|Permisson|  
|---|---|
|Read-only| can only be used to download packages from the registry. It's recommended for automation and workflows for installing packages but not publising.
|Automation| can download and publish packages unless [2FA is configured](https://docs.npmjs.com/configuring-two-factor-authentication), it will not be enforced. It's recommended for automation workflows for publishing new packages.
|publish| can perform any action including downloading and publishing packages, and changing user settings or package settings. It's recommended for interactive workflows.

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

### Preparation

> Registry data is immutable, ...once published, a package cannot change.

Before registering our local package to [the public npm registory](https://docs.npmjs.com/about-the-public-npm-registry), make sure that;

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

e.g.)

```json
{
  "name": "@scope/pakage-name",
  "version": "1.0.0",
  "description": "A package for ....",
  "main": "index.js",
  "script": {},
  "repository": {
    "type": "git",
    "url": "https://github.com/socope/pakage-name.git"
  },
  "keywords": ["keyword1", "keyword2", "keyword3"],
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
</details>

<details>
<summary><h4>Option 1 &horbar; Using command line</h4></summary>

### &#10102; Access an npm Account

**IMPORTANT:** Never use the CCDL account to release or update a package, but rather use the accounts of individual members.

#### &#10074; Login

**1 )** Navigate to the local package and run the [`npm login`](https://docs.npmjs.com/cli/v8/commands/npm-adduser)(aliases: `adduser`) command.

(To specify an organization scope, pass the `--scope` flag.)

```
npm login

npm login --scope@ccdl
```

<br/>

**2 )** Follow the prompt and enter the username, password, email address, and a one-time password respectively.

After entering the valid username and email address, the npm CLI outputs a URL with a ramdom hash:

```
npm notice Open https://www.npmjs.com/login/xxxxxxx to use your security key for authentication
```

Since we configured [2FA](https://docs.npmjs.com/configuring-two-factor-authentication) with [YubiKey](https://www.yubico.com), we'll neeed to [generate a one-time password](https://docs.npmjs.com/accessing-npm-using-2fa) using the npm Web interface.

Access the URL via a browser and follow the web interface to generate a one-time password using the [YubiKey](https://www.yubico.com) device.

Once done, enter it into the prompt:

```
Enter one-time password: ONE-TIME-PASSWORD
```

<br/>

**3 )** Upon successful login, it outputs a message to stdout as follows:

```
Logged in as USERNAME on https://registry.npmjs.org/.
```

#### &#10074; Check Username

To display the currently logged-in username, use the [`npm whoami`](https://docs.npmjs.com/cli/v8/commands/npm-whoami) command:

```
npm whoami
```

#### &#10074; Logout

The [`npm logout`](https://docs.npmjs.com/cli/v7/commands/npm-logout) command logouts without writting any message to stdout.

```
npm logout
npm logout --scope=@ccdl
```

### &#10103; Register a Local Package to npm

#### &#10074; Publish

To publish a local package, use the [`npm publish`](https://docs.npmjs.com/cli/v8/commands/npm-publish) command.

**NOTE:** By default, an organization scoped package is private; thus use the <code>--access <<strong>public</strong>|restricted></code> flag to explicitly set its access level to public upon publishing.

**1 )** In the root of the local package folder, run the following:

```
npm publish --access public
```

Since we configured [2FA](https://docs.npmjs.com/configuring-two-factor-authentication) with [YubiKey](https://www.yubico.com), we'll neeed to [generate a one-time password](https://docs.npmjs.com/accessing-npm-using-2fa) using the npm Web interface(follow the same steps as we did when login to the npm account).

<br />

**2 )** Install the published npm package

Once successfully published , it can be installed by its name as well as will be listed on the CCDL account.

```
npm install @ccdl/refinebio
```

#### &#10074; Unpublish

**IMPORTANT:**

> Registry data is immutable, meaning once published, a package cannot change. We do this for reasons of security and stability of the users who depend on those packages. So if you've ever published a package called "bob" at version 1.1.0, no other package can ever be published with that name at that version. This is true even if that package is unpublished.

- Once `package@version` has been published, that combination will be permanently unavailable.
- Once a npm package has been unpublished, it cannot be undone.
- Once a npm package is entirely unpublished(inluding all versions), it cannot be published again with any new versions within 24 hours.

(For more infomration: [npm Unpublish Policy](https://docs.npmjs.com/policies/unpublish))

**Unpublish a entire package:**

To unpublish all versions at once, use the [`npm unpublish`](https://docs.npmjs.com/cli/v8/commands/npm-unpublish) command and the `-f`(`--force`) flag.

Since we configured [2FA](https://docs.npmjs.com/configuring-two-factor-authentication) with [YubiKey](https://www.yubico.com), we'll neeed to [generate a one-time password](https://docs.npmjs.com/accessing-npm-using-2fa) using the npm Web interface(follow the same steps as we did when login to the npm account). Alternatively we may also pass a one-time passward using the `--otp=CODE-FROM-AUTH-APP` flag.

```
npm unpublish ccdl@refinebio -f
```

**Unpublish a specific version:**

```
npm unpublish @ccdl/refinebio@0.1.0
```

---

</details>

<details>
<summary><h4>Option 2 &horbar; Using Github Actions workflows</h4></summary><br />
 
**NOTE:** To use [Github Actions](https://github.com/features/actions), our local package must be hosted in [Github](https://github.com/).  
  
### &#10102; Setup Authentication
#### 1 ) Generate an npm access token
An npm access token must be provided to Github for authentication and it may be created using the [web](https://docs.npmjs.com/creating-and-viewing-access-tokens) or the [npm CLI](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-tokens-with-the-cli).

While generating the token;

- be sure to select the type of access token as "**Automation**"
- save the token value(only visible at the time of creation)

In our case, name it as `GITHUB_AUTOMATION`.

#### 2 ) Add the npm access token to Github secrets

Using the [web](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository), add a new secret and set its value to the npm access token we generated.

Upon creating a new secret, make sure to;

- follow the [naming rules](https://docs.github.com/en/actions/security-guides/encrypted-secrets#naming-your-secrets).
- prefix with **`NPM_`** as its common naming convention.

In our case, name it as `NPM_TOKEN`.

### &#10103; Setup Github Actions workflows

#### 1 ) Add a workflow directory and file

Github Ations workflows use [YAML](https://learnxinyminutes.com/docs/yaml) syntax to define a [workflow configuration](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions). In the root of our local repository, create a `.github/workflows/NAME-OF-WORKFLOW.yml`.

- `NAME-OF-WORKFLOW` - a name of the workflow and should be self-explanatory

In our case, name it as `publish.yml` as below:

```
package.json
node_modules/
.github/
  workflows/
    publish.yml
```

#### 2 ) Configure a workflow

We may configure [workflow triggers](https://docs.github.com/en/actions/using-workflows/triggering-a-workflow) using any supported [events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows).

- The [**`name`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#name) property is used to deifne the name of a workflow which will be displayed in our Github repository's [actions page](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-activity-for-a-workflow-run).
- The [**`on`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on) property is used to define the event. In our case, we use the [`release`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release) event to trigger a workflow to automatically publish the package when we [create a new release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release) in our Github repository. With that, the `Activity types` of the [`release`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release) event should be set to `created`.
- The [**`jobs`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobs) property is used to define tasks to run when the workflow is triggered. In a workflow, we can add any number of jobs which run in parallel. A [unique identifier](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_id) is assigned to each job and each job runs in a separate new instance of the virtual enviromnent specified by [`runs-on`](https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job).
- The [**`steps`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps) property is used to define a set of tasks to run in a job. Any number of steps can be added in a single job and those steps are excecuted in the order in which they are defined. A step can [run commands](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) using the operating system's shell and can [use an action](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsuses). We may also assign a [`name`](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps) to each step to display in the [actions page](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-activity-for-a-workflow-run).

The below workflow publishes our local package to the [public npm registry](https://docs.npmjs.com/about-the-public-npm-registry) upon a new release if [CI tests](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration) passes.

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

### &#10104; Setup Github Release

#### 1 ) Create a tag for our local package release

> A Git tag is similar to a [Git reference](https://docs.github.com/en/rest/git/refs), but the Git commit that it points to never changes. Git tags are helpful when you want to point to specific releases.

Every [`release`](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) is associated with its corresponding [tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging); that is, generally its [version number](https://semver.org).

There are two types of tags supported in Github:
|type||
|:--:|---|
|Lightweight| It is simply a pointer to a specific commit, is commonly used as a "bookmark" and as private.|
|Annotated| It is stored as a full object in the Git database, contains additonal meta data(a tagger name, email, and date; can have a tagging message etc), and is commonly used for a public release of a project.|

**NOTE:** It’s generally recommended to create annotated tags so that we have all the information.

<br />

**&#10074; Create an annotated tag**

In the root of our local repository, use the [`git tag -a <tagname> -m <msg>`](https://git-scm.com/docs/git-tag) command to create an annotated tag.

(by passing the flag [`-a`](https://git-scm.com/docs/git-tag#Documentation/git-tag.txt--a) or [`--annotate`](https://git-scm.com/docs/git-tag#Documentation/git-tag.txt--a) makes an unsigned annotated tag object)

e.g.) Creates an annotated tag named as `v1.0.0` with the message "refinebio Release Version 1.0.0"

```
git tag -a v1.0.0 -m "refinebio Release Version 1.0.0"
```

It tags the last commit in our local commit history.

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

**&#10074; Share a tag with remote**

To share a tag in the local repository, we must explicitly push it the remote repository using the [`git push origin <tagname>`](https://git-scm.com/book/en/v2/Git-Basics-Tagging#_sharing_tags) command:

```
git push origin v1.0.0
```

To push all the local tags to the remote at once, use the `--tags` flag which will transfer all tags that are not already there:

```
git push origin --tags
```

<br />

**&#10074; Delete a tag**

To delete a tag in the local repository, use the [`git tag -d <tagname>`](https://git-scm.com/book/en/v2/Git-Basics-Tagging#_deleting_tags) command:

```
git tag -d v1.0.0
```

To delete a tag in the remote repository, run the `git push <remote> :refs/tags/<tagname>` command:

(It pushes the null value to the remote tag name that results in the deletion of that tag.)

```
git push origin :refs/tags/v1.0.0
```

Or run the `git push origin -d <tagname>` command:

```
git push origin -d v1.0.0
```

#### 2 ) Create a release to trigger the publish workflow

Now we can [create a new release ](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)in the Github repository. It'll instantly trigger the publish workflow and register our local package to the [public npm registory](https://docs.npmjs.com/about-the-public-npm-registry).

Once the publish workflow passes in the [actions page](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-activity-for-a-workflow-run), [sign in](https://www.npmjs.com) to our CCDL npm account. We will see that this newly registered package is publicly available for installation.

</details>

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step 3: Manage a npm Package

**(Basic Terminologies)**

 <details>
<summary>&horbar; Changelog</summary>
  
> A changelog is a log or record of all notable changes made to a project...and the changelog usually includes records of changes such as bug fixes, new features, etc.

It is important to create a [changlog](https://en.wikipedia.org/wiki/Changelog) so that other users and contributors can easily follow what has been updated with a new release. The content should be a human-readable format in chronological order.

There are several ways to approach this which includes adding a `CHANGELOG.md` file to record new changes and generating a changelog from git commit history either manually or using Github Actions workflows.

(For more information: [Keep a changelog](https://keepachangelog.com/en/1.0.0))

</details> 
 
### &#10102; Test a npm Package Locally
It's important to test a npm package during the development phase and **before publishing it to the [public npm registry](https://docs.npmjs.com/about-the-public-npm-registry)**. 
  
There are several ways to test our packages locally:
  
<details>
<summary><strong>Option 1 &horbar; Symbolic linking a npm package</strong></summary><br />
  
**&#10074; Linking a package**
  
The [`link`](https://docs.npmjs.com/cli/v8/commands/npm-link) command allows us to install our own package to a project and test it iteratively without having to continually rebuild.
    
**1 ) Create a symlink of the package in the global folder**

Navitate to the root of the package directory and run the following:

- `PACKAGE-NAME` - the name of the npm package

```
cd ~/PACKAGE-NAME && npm link
```

It creates a global symlink which links to the package.

<br />
  
**2 ) Install the globally-installed package**  
  
Navigate to a project folder where you want to use this globally-installed package to and run the following:
  
**NOTE:** If a package name is prefixed with a [scope](https://docs.npmjs.com/cli/v8/using-npm/scope), it must be included upon linking.  
  
- `OWNER` - the name of a user or an organization of the repository containing the project  
  
```
npm link @OWNER/PACKAGE-NAME 
```  
    
It creates a symbolic link from the globally-installed `@OWNER/PACKAGE-NAME` to `node_modules/` of this project directory.
  
Once successfully linked, any changes made to the linked-package will instantly be mirrored in this project.
  
**NOTE:** By default, a symbloic linked package won't be saved as `dependencies` to package.json(for more information: [Caveat](https://docs.npmjs.com/cli/v8/commands/npm-link#caveat)).
  
<br />
  
**&#10074; Removing a linked-package**

Once testing is done, we can remove symbolic links using [`uninstall`](https://docs.npmjs.com/cli/v8/commands/npm-uninstall)(aliases: `unlink`) command.

**1 ) Unlink the linked-package from the project**

In the project directory, run the following to unlink the linked-package:

```
npm uninstall @OWNER/PACKAGE-NAME
```

<br /> 
  
**2 ) Delete the symbolic link**   
 
In the npm package directory, run the following to remove its symbolic link in the global folder.
  
```
npm uninstall  
```  
  
--- 
  
</details>  
  
<details>
<summary><strong>Option 2 &horbar; Packing a npm package</strong></summary><br/>
  
Before publising a locally developed npm package to the [public npm registry](https://docs.npmjs.com/about-the-public-npm-registry)**, we can test it using the [`pack`](https://docs.npmjs.com/cli/v6/commands/npm-pack) command. 
  
**1 ) Create a tarball of the package**  
  
In the npm package directory, run the following to pack it into a tarball:
  
(To only see what will be packaged, use `--dry-run` flag) 
```
npm pack  
```  
  
It creates a tarball from a npm package as `<PACKAGE-NAME>-<VERSION>.tgz` and writes its filenames to stdout. Using this tarball, we can test our local package. 
   
<br />
  
**2 ) Install the local package using the tarball**  
  
Copy the tarball file into the root of a project folder where you want to install it.
  
And in the project folder, run the following:    
```
npm install <PACKAGE-NAME>-<VERSION>.tgz  
```  
  
It installs the local package using this tarball and add it to the `node_modules/` in this project directry instead of fetching the data from the [public npm registry](https://docs.npmjs.com/about-the-public-npm-registry), thus no need to be online to run the [`npm install`](https://docs.npmjs.com/cli/v8/commands/npm-install).    
  
**NOTE:**  Every time we make a change to the local package, we'll need to re-pack it and then re-install it to the project.
  
---  
  
</details>    
    
<details>
<summary><strong>Option 3 &horbar; Using workspaces</strong></summary><br/>
  
By defining the [`workspaces`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#workspaces) in package.json, we can manage multiple linked packages from the local file system without manually using `npm link` to create and reference each symbolic link of packages.
  
**1 ) Add the local packages to in a project**  
  
Add local packages to a project folder where you want to install them.
  
e.g.) The directory structure of project `demo` which contains packages, `package_a` and `package_b`, in its sub-directory. 
  
```
package.json  
node_modules/  
packages/
  a/
    package.json
  b/
    package.json
```  
<br />
  
**2 ) Define workspaces in package json**
  
In the `demo`'s package.json, define the `workspaces` property and add the paths to those local packages:
  
```
"workspaces": ["./packages/a", "./packages/b"], 
```
  
<br />
  
**3 ) Link the local packages** 
  
By running the [`npm install`](https://docs.npmjs.com/cli/v8/commands/npm-install) command, it creates symbolic links of that local packages.
  
```
npm install  
```  
  
e.g.) Those packages are now included in `node_modules/` as linked packages. 
```
package.json  
node_modules/
  a/
  b/
packages/
```    
  
**4 ) Specify the workspace from the top-level**
  
By using the `--workspace=PAKCAGE-NAME` flag, we can run a command in the context of that specified workspace.

e.g.) Running the test defined in `a/package.json`.

```
 npm run test --workspace=a
```

To run a command in the context of all workspaces, use `--workspaces`:

```
npm run test --workspaces
```

It runs the tests defined in both `a/package.json` and `b/package.json`.

(For more information: [Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces))

</details> 
 
### &#10103; Release a new version 
> When you make significant changes to a published package, we recommend updating the version number to communicate the extent of the changes to others who rely on your code.

**NOTE:** Updating the version number will add a tag with the updated release number to the linked git repository.

<details>
<summary><h4>Option 1 &horbar; Using command line</h4></summary>
  
:link: [Updating your published package version number](https://docs.npmjs.com/updating-your-published-package-version-number)
 
**IMPORTANT:** Before the new relase, make sure to include a `CHANGELOG.md` in the package root directory.

To update the version number in `package.json`, use the [`npm version`](https://docs.npmjs.com/cli/v8/commands/npm-version) command.

**1 )** Navigate to the package root directory and run the [`npm version <update_type>`](https://docs.npmjs.com/cli/v8/commands/npm-version).

- `<update_type>` should be one of the [SemVar](https://semver.org/) release types

e.g.) Update the version number as the patch type(`0.0.1` to `0.0.2`)

```
npm version patch
```

<br />
 
**2 )** Publish the new relase number to the npm registry

```
npm publish --access public
```

<br />
 
**3 )** Login to the CCDL account and confirm the version update

Visit the package page to make sure that the package version number is updated correctly.

---

</details>
 
<details>
<summary><h4>Option 2 &horbar; Using Github Actions workflows</h4></summary>
 
**(Basic Terminologies)**
<details>
<summary>&horbar; Conventional Commits</summary>
    
> The [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/#specification) is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.
    
Utilizing Conventional Commits not only improves communication and understanding regarding the context of each commit, but it also alllows us to easily generate release notes using automated tooling systems. It's specification is based on the [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).    
    
<br />
    
**&#10074; Message Structure Format**
```
<type>[optional scope]: <description>
[optional body]
[optional footer(s)] 
```    
 
<br />
    
**&#10074; Necessary Structural Elements**
 
|Type|Definition|[SemVar](https://semver.org/#summary)<br/> <sup>(equivalent)</sup>| 
|:---:|---|:---:|
|fix|A commit that patches a bug and is backwards compatible|`PATCH`| 
|feat|A commit that introduces a new feature is backwards compatible|`MINOR`| 
|BREAKING CHANGE|A commit that introduces a breaking API change and;<br/>- has a footer `BREAKING CHANGE:` or<br/>- appends a `!` after the type/scope|`MINOR`| 
|others|- Based on the the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines), `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:` etc are allowed<br/>- Footers other than `BREAKING CHANGE: < description >` may be provided and follow a convention similar to [git trailer format](https://git-scm.com/docs/git-interpret-trailers)<br/>- A scope may be provided after a type for additional contextual information and is contained within parenthesis(e.g. `feat**(**parser**)**: add ability to parse arrays`)|Depends on the context|  
   
(For more information: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0))     
 
--- 
</details> 
 
(in progress)
</details> 
<p align="right">(<a href="#top">back to top</a>)</p>
