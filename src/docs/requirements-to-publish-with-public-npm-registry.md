<div id="top"></div>

# Publishing npm Packages with the Public npm Registry

> npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development...

Step-by-Step Guide for Publishing npm Packages to the Public npm Registry.

**Resources:**<br/>

:link: [npm Docs](https://docs.npmjs.com)<br />
:link: [Github Docs](https://docs.github.com)

<details open>
<summary><h4>Table of Contents</h4></summary>

- [Prerequisite]()
- [Step 1: Setting up npm Accounts]()
  - [&#10112; Register npm User Accounts]()
  - [&#10113; Create an Organization]()
    - [Option 1: Add an organization to a newly created user account]()
    - [Option 2: Converting an already exsisting user account to an organization]()
  - [&#10114; Manage Organization Teams and Members]()
  - [Option 1: Using Web Interface]()
  - [Option 2: Using command line]()
- [Step 2: Setting Up a npm Package]()
  - [&#10112; Access to a npm User Account from a Local Machine]()
  - [&#10113; Manage npmrc Configuration files]()
- [Step 3: Publishing a Package to npm Registory]()
  - [&#10112; Publish a npm Package]()
    - [Option 1 ― Using command line]()
    - [Option 2 ― Using Github Action workflows]()
  - [&#10113; Test the published npm Package]()
    - [Option 1 ― Using command line]()
    - [Option 2 ― Using Github Action workflows]()
- [Step 4: Managing a package]()
  - [Option 1 ― Using command line]()
  - [Option 2 ― Using Github Action workflows]()

</details>

<details>
<summary><h2>Prerequisite</h2></summary>

[Node.js](https://nodejs.org/en/) and the [npm CLI](https://docs.npmjs.com/cli/v8) are required to use the public npm registry.

The following command will outputs the Node.js and npm version numbers if its installed on the machine:

```
node -v && npm -v
```

(For more information: [Install](https://docs.npmjs.com/cli/v8/configuring-npm/install))

<p align="right">(<a href="#top">back to top</a>)</p>  
  
--- 
</details>

## Step &#10102; Setting Up npm Accounts

<details>
<summary>&horbar; Information to get started</summary>

We need to prepare the following information prior to signing up for a new npm account.

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Username <br/><sup>(Required)</sup></td>
      <td>All lowercase letters and can contains digits and hyphens</td>
    </tr>
    <tr>
      <td>Email Address<br/><sup>(Required)</sup></td>
      <td>Registered email address is <strong>public</strong> and it'll be:
        <ul>
            <li>added to the metadata of our packages and visible to anyone who downloads them.</li>
            <li>used by npm for email notifications</li>
        </ul>
     </td>
    </tr>
    <tr>
      <td>Password <br/><sup>(Required)</sup></td>
      <td>At least 10 characters(with <a href="https://www.lastpass.com">Lastpass</a> and requires<a href="https://docs.npmjs.com/configuring-two-factor-authentication">2FA</a>)<br/>
      (For more information: <a href="https://docs.npmjs.com/creating-a-strong-password">Creating a strong password</a>)  
      </td>
    </tr>
    <tr>
      <td>Orgniazation Name <br/><sup>(Required)</sup></td>
      <td>All lowercase letters and can contains digits and hyphens<br/>(*This value cannot be the same as a username)</td>
      </td>
    </tr>
      <td>Billing Information<br/><sup>(Optional)</sup></td>
      <td>A paid account to publish private packages
      </td>
    </tr>
  </tbody>
</table>

---

</details>

<details>
<summary>&horbar; npm account types</summary>
  
npm offers a **free** account as well as a [monthly **paid** subscription](https://www.npmjs.com/products).
<table>
  <thead>
    <tr>
      <th>Free</th>
      <th><sup>For individuals</sup><br/>Pro<br/><sup>($7 per /mo)</sup></th>
      <th><sup>For teams / organizations</sup><br/>Team<br/><sup>($7 per user /mo)</sup></th>
      <th>Feature</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">&#10003;</td>
      <td align="center">&#10003;</td>
      <td align="center">&#10003;</td>
      <td><strong>Unlimited Public Packages</strong> & Automatic Security Warnings</td>
    </tr>
    <tr>
      <td></td>
      <td align="center">&#10003;</td>
      <td align="center">&#10003;</td>
      <td><strong>Unlimited private packages</strong> & Unlimited Package-based Permissions</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td align="center">&#10003;</td>
      <td>Unlimited Team-based Permissons and Management</td>
    </tr>     
  </tbody>
</table>
    
--- 
</details>

<details>
<summary>&horbar; npm registries</summary>

There are **public** and **private npm registries** available to publish npm packages.

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://docs.npmjs.com/about-the-public-npm-registry">public npm registry</a></td>
      <td> 
        The default registry<br/>
        <ul>
          <li>Publish public packages</li>
          <li>Registry URL https://registry.npmjs.org</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><a href="https://docs.npmjs.com/cli/v8/using-npm/registry#how-can-i-prevent-my-package-from-being-published-in-the-official-registry">private npm registry</a></td>
      <td>
        The private registry/proxy to:
        <ul>
          <li>Publish private packages</li>
          <li>Set up better security control</li>
          <li>Encapsulate business logic</li>
        </ul>
        Popular options include:<br/>
        <strong>Open source:</strong> <a href="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry"><strong>Github Packages(recommended)</strong></a>, <a href="https://verdaccio.org">Verdaccio</a>, <a href="https://bit.dev">Bit</a><br/>
        <strong>Paid:</strong> <a href="https://www.npmjs.com/products">npm monthly subscription</a>, <a href="https://www.jfrog.com">Frog Bintray</a>, <a href="https://docs.myget.org">MyGet</a>    
      </td>
    </tr>
  </tbody>
</table>
  
(For more information: [Registry](https://docs.npmjs.com/cli/v8/using-npm/registry))  
  
---  
</details>

<details>
<summary>&horbar; Package visibility and scopes</summary>

<table>
  <thead>
    <tr>
      <th>Visibility</th>
      <th>Namespace</th>
      <th>Cost</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">Public</td>
      <td align="center">global,<br/>User,<br/>Organization</td>
      <td align="center">Free</td>
      <td>
        A <a href="https://docs.npmjs.com/about-public-packages">public package</a> may be unscoped or scoped and is visible to everyone.
        <ul>
          <li><strong>Unscoped public packages</strong>  belong to the global public registry namespace</li>
          <li><strong>Scoped public packages</strong> belong to a user or an organization namespace</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Private</td>
      <td align="center">User,<br/>Organization</td>
      <td align="center">Monthly Paid Subscription</td>
      <td>A <a href="https://docs.npmjs.com/about-private-packages">private package</a> belongs to a user or an organization namespace and is only visible to its account owner and its organization and selected collaborators.<br/> 
      </td>
    </tr>
  </tbody>
</table>
  
(For more information: [Packages scope access level and visibility](https://docs.npmjs.com/package-scope-access-level-and-visibility))

---

</details>

<details>
<summary>&horbar; Organizational user roles</summary>
In npm, each role can be assigned to multiple users, whereas a single user cannot have multiple roles.

There are three organizational user roles:
|Role|Permisson|
|:---:|---|
|Owner|who have all privileges and are responsible for managing organization members and billing|
|Admin|who are responsible for managing the team membership and package access|
|Member|who are merely responsible for creating and publishing packages|

(For more information: [Organization roles and permissions](https://docs.npmjs.com/organization-roles-and-permissions))

---

</details>

<details>
<summary><h3>&#10112; Register npm User Accounts</h3></summary>
  
  :link: [Creating a new user account on the public registry](https://docs.npmjs.com/creating-a-new-npm-user-account)
  
  **1 ) Create the CCDL User Account(a super user)**
  
  This account will be used for creating an organiazation in the [next step (EDIT)]().
  
  An email address used for this account is public facing and will be **visible** to anyone who downloads our packages.
  
  Once the organization is created, this account will be; 
  - converted to an **organization**(i.e. an **Organization Name** will be added to this account).
  - an **Owner user**(role non-reassignable) who has all privileges including managing organizational members and billing.
  - automatically added as a member of **Team** called [**developers**](https://docs.npmjs.com/about-developers-team)(default team)
  
  e.g.)
  <pre>
  
  <strong>Username</strong>: ccdl-npm, ccdl-master, ccdl-super etc <i>// this will be a super user</i>
  <strong>Email Address</strong>: ccdl-npm@ccdatalab.org, npm@ccdatalab.org etc <i>// visibility of this email address is public</i>
  </pre>
  
  <br/>  
  
  **2 ) Create Collaborators User Account**
  
  Each account will be used for either; 
  - an **Owner user** who manages the organizational tasks including bullings
  - an **Admin user** who manages team and package access in the organization.
  - a **Member user** who creates and publishes packages within the organizational scope.
  
  e.g.)
  <pre>
  
   <strong>Username</strong>: github-username<i> // the Github contributor of our repository</i>
   <strong>Email Address</strong>: github-email@address.com <i> // an email associated with the above Github account</i>
  </pre>

---

</details>
  
<details open>
<summary><h3>&#10113; Create an Organization</h3></summary>
   
  Depending on the needs, there are two ways in which we can create an organization.
  
  <details>
  <summary><strong>Option 1 &horbar; Add an organization to a newly created user account</strong></summary>
      
  :link: [Create an Organization](https://docs.npmjs.com/creating-an-organization)
  
  **1 ) Add an Organization Name to the CCDL user account**
 
  The Organization Name;
  - cannot be the same as the **Username** of this CCDL account.  
  - cannot be changed once it's created.
  - will be used as an <strong>organizational scope</strong>.

  <br/>  
    
  **2 ) Select an Account Plan**
  
  If publishing only scoped **public** packages with a minimal team management, then a **free** account will be sufficient. Otherwise, the **Team** product would be suitable.

**NOTE:** The account plan can be [upgraded](https://docs.npmjs.com/upgrading-to-a-paid-organization-plan) or [downgraded](https://docs.npmjs.com/downgrading-to-a-free-organization-plan) at anytime.

  <br/>  
    
  **3 ) Invite Members <sup>(optional)</sup>**
   
  We can invite a person to be a member of our organization using an existing **npm username** or an **email adress**(it can also be a non-npm email address and npm will ask the invitee to signup). The invitation will be sent out via an email which expires in 7 days and is revokable.
   
  Once the invitation has been accepted, we can reassign a different role or **Teams** to that newly added member. A member can belong to multiple teams or no team.   
    
  **IMPORTANT:** For the paid organization, adding a new member costs $7 per /mo for each new member.

---

  </details>
  
  <details>
  <summary><strong>Option 2 &horbar; Converting an already exsisting user account to an organization</strong></summary>
  
  :link: [Converting your user account to an organization](https://docs.npmjs.com/converting-your-user-account-to-an-organization)

The steps will be similar to **Option 1** except we'll need to come up with a new **Username** for this exsisting account, since this **Username** will be now used as an **Organization Name**.

**NOTE:** A **Username** and an **Organization Name** cannot have the same value.

---

  </details>
</details>

<details open>
<summary><h3>&#10114; Manage Organization Teams and Members</h3></summary>
  
Managing teams and memberships can be done using the web interface or the npm CLI.

<details>
<summary><strong>Option 1 &horbar; Using Web Interface</strong></summary><br/>
      
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
  
<br/>  
  
**NOTE:** By default, the team [**developers**](https://docs.npmjs.com/about-developers-team) is automatically created with read/write access upon the creation of an organization and is nonremovable.   
  
---  
</details>

<details>
<summary><strong>Option 2 &horbar; Using command line</strong></summary><br/>

By using [`npm team`](https://docs.npmjs.com/cli/v8/commands/npm-team) command, we can manage teams. However, no support for managing permissions for packages.

**Note:** A user must be **Admin user** to manage teams and packages.

</details> 
</details>

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step &#10103; Setting Up a npm Package

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

The npm CLI will auto-generate an temporary access token upon running the [`npm login`](https://docs.npmjs.com/cli/v7/commands/npm-adduser) command or we can [create our custom access token](https://docs.npmjs.com/creating-and-viewing-access-tokens) to privde a third-party temporary access to our npm packages.

e.g.) [Github Actions](https://docs.github.com/en/actions) using [secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

There is three token types:
|Type|Permisson|  
|---|---|
|Read-only| can only be used to download packages from the registry. It's recommended for automation and workflows for installing packages but not publising.
|Automation| can download and publish packages unless [2FA is configured](https://docs.npmjs.com/configuring-two-factor-authentication), it will not be enforced. It's recommended for automation workflows for publishing new packages.
|publish| can perform any action including downloading and publishing packages, and changing user settings or package settings. It's recommended for interactive workflows.

---

</details>

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
<summary><h3>&#10112; Access to a npm User Account from a Local Machine</h3></summary>
   
  We can access to the registered npm account using the npm CLI via Terminal.

**&#10074; Login**

(alias) [`adduser`](https://docs.npmjs.com/cli/v8/commands/npm-adduser),`add-user`

**1 )** Run the `login` command. To specify an organization scope, use `--scope` flag:

- `OWNER` - the name of a user or an organization of the repository containing the project

```
npm login

npm login --scope@OWENER
```

  <br />
    
  **2 )** Follow the prompt and enter the username, password, email address, and a one-time password respectively.
  
  The one-time password will either be sent to the registered email address or can be accessed through [2FA](https://docs.npmjs.com/accessing-npm-using-2fa). 
   
  e.g.) Accessing a npm account using 2FA with [YubiKey](https://www.yubico.com) 
  
  After entering the valid username and email address, the npm CLI will output a URL with a ramdom hash:
    
  ```
  npm notice Open https://www.npmjs.com/login/xxxxxxx to use your security key for authentication
  Enter one-time password:  
  ```
    
  We can access the URL via a browser and follow the web interface to generate a one-time password using the YubiKey device.
    
  <br />

**3 )** Upon successful login, the stdin outputs a message as follows:

```
Logged in as USERNAME on https://registry.npmjs.org/.
```

  <br />  
    
  **NOTE**: By running `npm login`command, npm will either auto-generate a **per-user .npmrc** with the registry and a temporary access token(whose value differs at each login) or write that information to an exsisting one.
  ```
  //registry.npmjs.org/:_authToken=npm_TOKEN...  
  ```  
    
  <br />  
    
  **&#10074; Logout**
  The [`logout`](https://docs.npmjs.com/cli/v7/commands/npm-logout) command logouts without providing any feedback.
  ```
  npm logout  
  ```     
    
  **NOTE**:  By running `npm logout` command, npm will automatically remove a **per-user .npmrc**(if no other settings were added in that file) or delete the auto-generated line from the existing one.
    
 (npm will remove the auto-generated access token from the web account at npmjs)     
    
  <br />

**&#10074; Check the current user**

To display the currently logged in username:

```
npm whoami
```

---

</details>

<details>
<summary><h3>&#10113; Manage npmrc Configuration files</h3></summary>

The [`config`](https://docs.npmjs.com/cli/v8/commands/npm-config) command can be used to edit the contents of npmrc files.

There are five sub-commands:
|Verb||
|:--:|--|
|`set`|Sets the value of a config key|  
|`get`|Display the config value(s)|  
|`delete`|Deletes a specified keys from a configuration file|  
|`list`|Show all the config settings|  
|`edit`|Opens a config file in an editor(e.g. vim)|

<br />
  
**&#10074; List the npmrc files**
  
To output configuration files and its settings, use the `--l` (ini-formatted list) or `--json`(json format) flag:
```  
npm config list -l
```  
  
<details>
<summary><strong>per-project .npmcr</strong></summary>

A per-project(a.k.a local) .npmrc file must be created in the root of a project.

We can;

- manually create a local .npmrc.
- use the `config` along with the <code>--location <global|user|<strong>project</strong>></code> flag to open and edit the per-project .npmrc.

**&#10074; Open and edit per-project .npmrc**

```
cd path/to/project && npm config edit --location project
```

---

</details>
  
<details>
<summary><strong>per-user .npmcr</strong></summary>
  
By default, by running the `edit` sub-command will open a per-user .npmrc.
  
**&#10074; Open and edit ~/.npmrc**
  
```
npm config edit 
```  
   
    
e.g.) Set the value of license
```
npm config set init-license "MIT" 
```

e.g.) Display the value of `init-license`

```
npm config get init-license
```

**NOTE:** In case a project has already been initialized, delete the existing package.json and re-generate a new one to see new changes.

---

</details>
  
<details>
<summary><strong>global npmcr</strong></summary><br />
  
A global configuration will be overwitten by a per-user .npmrc file.

To edit a global npmrc file, use the `--global`, `-g`, or <code>--location <global|user|<strong>project</strong>></code> flag.

**&#10074; Open and edit global npmrc**

```
npm config -g edit
```

</details>

(For more information: [config](https://docs.npmjs.com/cli/v8/using-npm/config) or view the manual via Terminal, run `npm help config`)

</details>

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step &#10124; Publishing a Package to npm Registory

<details open>
<summary><h3>&#10112; Publish a npm Package</h3></summary>
  
<details>
<summary><strong>Option 1 &horbar; Using command line</strong></summary><br/>
  
**1 ) Navigate to the package directry to be published**
  
**2 ) Push the package**
  
- Before running the [`npm publish`](https://docs.npmjs.com/cli/v8/commands/npm-publish) command, make sure everything is correct.

```
npm publish
```

---

</details>

<details> 
<summary><strong>Option 2 &horbar; Using Github Action workflows</strong></summary><br/>

</details>  
  
---    
</details>

<details>
<summary><h3>&#10113; Test the published npm Package</h3></summary>  
  
</details>

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step &#10125;: Managing a package

<details>
<summary><strong>Option 1 &horbar; Using command line</strong></summary><br/>


---

</details>

<details>
<summary><strong>Option 2 &horbar; Using Github Action workflows</strong></summary><br/>

</details>

<p align="right">(<a href="#top">back to top</a>)</p>
