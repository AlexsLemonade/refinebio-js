<div id="top"></div>

# Publishing npm Packages with the Public npm Registry

> npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development...

Step-by-Step Guide for Publishing npm Packages to the Public npm Registry.

**Resources:**<br/>

:link: [npm Docs](https://docs.npmjs.com)<br />
:link: [Git Docs](https://git-scm.com/doc)<br />
:link: [Github Docs](https://docs.github.com)<br />
:link: [GithubCLI Docs](https://cli.github.com)

<details>
<summary><h4>Table of Contents</h4></summary>

[Prerequisite]()

[Step 1: Setting up npm Accounts]()

- [&#10112; Register npm User Accounts]()
- [&#10113; Create an Organization]()
- [&#10114; Manage Organization Teams and Members]()

[Step 2: Setting Up a npm Package]()

- [&#10112; Access to a npm User Account from a Local Machine]()
- [&#10113; Manage npmrc Configuration files]()

[Step 3: Publishing a Package to npm Registory]()

- [&#10112; Publish a npm Package]()
- [&#10113; Test the published npm Package]()

[Step 4: Managing a package]()

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

**(Basic Terminologie)**

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
  
>   Unscoped packages are always public. Private packages are always scoped. Scoped packages are private by default;...
  
We'll be publishing and managing the **organization scoped packages**. An organization sopced package are private by defailt. Thus, to publish our packages to the public npm registry, we'll need to explicitely set thier visibility to **public** upon publishing.
  
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
      <td align="center">global,<br/>User,<br/><strong>Organization</strong></td>
      <td align="center">Free</td>
      <td>
        A <a href="https://docs.npmjs.com/about-public-packages">public package</a> may be unscoped or scoped and is visible to everyone.
        <ul>
          <li>Unscoped public packages belong to the global public registry namespace</li>
          <li>Scoped public packages belong to a user or an organization namespace</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Private</td>
      <td align="center">User,<br/><strong>Organization</strong></td>
      <td align="center">Monthly Paid Subscription</td>
      <td>A <a href="https://docs.npmjs.com/about-private-packages">private package</a> belongs to a user or an organization namespace and is only visible to its account owner and its organization and selected collaborators.<br/> 
      </td>
    </tr>
  </tbody>
</table>
  
(For more information: [About scopes](https://docs.npmjs.com/about-scopes), [Packages scope access level and visibility](https://docs.npmjs.com/package-scope-access-level-and-visibility))

---

</details>

<details>
<summary>&horbar; Organizational user roles</summary>
  
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
    
  **1 ) Create the CCDL User Account**
  
  This account will be used for creating an organiazation in the next step [&#10113; Create an Organization]().
  
  An email address used for this account is public facing and will be **visible** to anyone who downloads our packages.
  
  Once the organization is created, this account will be; 
  - converted to an **organization**(i.e. an **Organization Name** will be added to this account).
  - an **Owner user**(non-reassignable).
  - automatically added as a member of a team [**developers**](https://docs.npmjs.com/about-developers-team)
  
  e.g.)
  
  <strong>Username</strong>
  : ccdl-npm, ccdl-master, ccdl-super 
  
  <strong>Email Address</strong>
  : ccdl-npm@ccdatalab.org, npm@ccdatalab.org 
 
  <br/>
  
  
  **2 ) Create User Accounts for Collaborators**
  
  Each account will be used for either; 
  - an **Owner user** who manages the organizational tasks including bullings
  - an **Admin user** who manages team and package access in the organization.
  - a **Member user** who creates and publishes packages within the organizational scope.
  
  e.g.)
  
   <strong>Username</strong>
  : a Github contributor's username of our repository
  
   <strong>Email Address</strong>
  : an email address associated with the above Github account

---

</details>
  
<details>
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

**NOTE:** A **Username** and an **Organization Name** cannot have the same value.

---

  </details>
</details>

<details>
<summary><h3>&#10114; Manage Organization Teams and Members</h3></summary>
  
Managing teams and memberships can be done using the web interface or the npm CLI. 
  
**Note:** A user must be **Admin user** to manage teams and packages.  
  
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

By using [`npm team`](https://docs.npmjs.com/cli/v8/commands/npm-team) command, we can manage teams. However, no support for managing package permissions.

</details> 
</details>

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step &#10103; Developing a npm Package

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
<summary><h3>&#10112; Access to a npm User Account</h3></summary>
   
We can access to the registered npm account from a local device using the npm CLI.

**&#10074; Login to npm**

**1 )** Run the [`login`](https://docs.npmjs.com/cli/v8/commands/npm-adduser)(aliases: `adduser`) command. To specify an organization scope, use `--scope` flag:

- `OWNER` - the name of a user or an organization of the repository containing the project

```
npm login

npm login --scope@OWENER
```

<br />

**2 )** Follow the prompt and enter the username, password, email address, and a one-time password respectively.

The one-time password will either be sent to the registered email address or can be generated if [2FA](https://docs.npmjs.com/configuring-two-factor-authentication) is configured.

e.g.) In our case, we configure [2FA](https://docs.npmjs.com/accessing-npm-using-2fa) with [YubiKey](https://www.yubico.com)

After entering the valid username and email address, the npm CLI will output a URL with a ramdom hash:

```
npm notice Open https://www.npmjs.com/login/xxxxxxx to use your security key for authentication
Enter one-time password:
```

We can access the URL via a browser and follow the web interface to generate a one-time password using the [YubiKey](https://www.yubico.com) device.

<br />

**3 )** Upon successful login, the stdin outputs a message as follows:

```
Logged in as USERNAME on https://registry.npmjs.org/.
```

**NOTE:** By running [`npm login`](https://docs.npmjs.com/cli/v8/commands/npm-adduser), it will either auto-generate a **per-user .npmrc** with the registry and a temporary access token(whose value differs at each login) or write that information to an exsisting one(npm will also auto-generate an access token in the portal at [npmjs](https://www.npmjs.com)).

  <br />  
    
  **&#10074; Logout from npm**
  
  The [`logout`](https://docs.npmjs.com/cli/v7/commands/npm-logout) command logouts without outputting any message to stdout. 
  ```
  npm logout 
  
  npm logout --scope=@OWENER
  ```     
  
**NOTE:** By running [`npm logout`](https://docs.npmjs.com/cli/v8/commands/npm-logout), it will automatically remove a **per-user .npmrc**(if no other settings were added in that file) or delete the auto-generated line from the existing one(npm will also remove the auto-generated access token from the portal at [npmjs](https://www.npmjs.com)).     
    
<br />

**&#10074; Display the current user**

We can check the currently logged-in username with the [`whoami`](https://docs.npmjs.com/cli/v8/commands/npm-whoami) command:

```
npm whoami
```

---

</details>

<details>
<summary><h3>&#10113; Manage npmrc Configuration files</h3></summary>

The [`config`](https://docs.npmjs.com/cli/v8/commands/npm-config) command can be used to edit the contents of [npmrc](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc) files.

**&#10074; List npmrc files**

We can utput the npmrc files using the sub-command [`list`](https://docs.npmjs.com/cli/v8/commands/npm-config#list).

To choose a preferred display format, use the `--l` (ini-formatted list) or `--json`(json format) flag:

```
npm config list -l
```

<details>
<summary><strong>per-project .npmcr</strong></summary>

A [per-project .npmrc](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#per-project-config-file) file must be created in the root of a project.

We can;

- manually create a local .npmrc.
- use the `config` along with the <code>--location <global|user|<strong>project</strong>></code> flag to open and edit the local .npmrc.

**&#10074; Open and edit per-project .npmrc**

We can open and edit the configuration file using the sub-command [`edit`](https://docs.npmjs.com/cli/v8/commands/npm-config#edit):

```
cd path/to/project && npm config edit --location project
```

---

</details>
  
<details>
<summary><strong>per-user .npmcr</strong></summary>
  
By default, the sub-command [`edit`](https://docs.npmjs.com/cli/v8/commands/npm-config#edit) opens a [per-user .npmrc](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#per-user-config-file).

**&#10074; Open and edit ~/.npmrc**

```
npm config edit
```

<br />
  
**&#10074; Set the value of a key**
  
We can assign the value of a key using the sub-command [`set`](https://docs.npmjs.com/cli/v8/commands/npm-config#set).
  
e.g.) Set a value of [`init-license`](https://docs.npmjs.com/cli/v8/using-npm/config#init-license)    
```
npm config set init-license "MIT" 
```

<br />
  
**&#10074; Get the value of a key**

We can display the value of a key using the sub-command [`get`](https://docs.npmjs.com/cli/v8/commands/npm-config#get).

e.g.) Display the value of `init-author-name`(https://docs.npmjs.com/cli/v8/using-npm/config#init-author-name)

```
npm config get init-author-name
```

**NOTE:** In case a project has already been initialized, delete the existing package.json and re-generate a new one to see new changes.

---

</details>
  
<details>
<summary><strong>global npmcr</strong></summary><br />
  
A global configuration will be overwitten by a [per-user .npmrc](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#per-user-config-file) file.

To edit a [global npmrc](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc#global-config-file) file, use the `--global`, `-g`, or <code>--location <global|user|<strong>project</strong>></code> flag.

**&#10074; Open and edit global npmrc**

```
npm config -g edit
```

</details>

(For more information: [config](https://docs.npmjs.com/cli/v8/using-npm/config) or view the manual via Terminal, run `npm help config`)

</details>

<details>
<summary><h3>&#10114; Test a npm Package Locally</h3></summary>
  
It's important to test a npm package during the development phase and **before publishing it to the [public npm registry](https://docs.npmjs.com/about-the-public-npm-registry)**. 
  
There are several ways to test our packages locally:
  
<details>
<summary><strong>Option 1 &horbar; Symbolic linking a npm package</strong></summary>
 
<br />
  
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
<summary><strong>Option 2 &horbar; Packing a npm package</strong></summary>
  
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
<summary><strong>Option 3 &horbar; Using workspaces</strong></summary>
  
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
</details>

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step &#10124; Publishing a Package to npm Registory

<details>
<summary><strong>Option 1 &horbar; Using command line</strong></summary><br/>
  
By using the [`npm publish`](https://docs.npmjs.com/cli/v8/commands/npm-publish) command, we can publish a local package. By default, an organization scoped package is private, thus we need to use the <code>--access <<strong>public</strong>|restricted></code> flag to explicitly set its access level to public upon publishing.
  
**IMPORTANT:** Before publisihg, make sure the local package is well tested and configured correctly. 
  
Navigate to the local package directory and run the following:
```
npm publish --access public
```
  
Once it's published succressfully, it can be installed by its name:
  
```
npm install @OWNER/PACKAGE-NAME  
```  
---
  
</details>
  
<details>
<summary><strong>Option 2 &horbar; Using Github Actions</strong></summary><br/>
  
To use [Github Actions](https://github.com/features/actions), our npm package must be hosted in Github. 
  
(Skip [&#10112; Setup Github Repositories]() if it already exists.)  
  
<details>
<summary><h3>&#10112; Setup Github Repositories</h3></summary>
  
 **1 ) Initialize a local git repository**
  
 Navigate to the root of the local package and run run the [`git init`](https://git-scm.com/docs/git-init) command:   
 ```
 git init
 ```  
  
<br />
  
**2 ) Create a new Github repository for the local package**
  
We can manually create a new Github repository via the web interface or use the [`gh repo create`](https://cli.github.com/manual/gh_repo_create) command([install Github CLI](https://github.com/cli/cli#installation)).  
  
**&#10074; Create a new repository with Github CLI**
  
To create a remote repository in;  
- interactive mode, pass no arguments.
- non-interactive mode, pass the repository name and one of the `--public`, `--private`, or `--internal` flags. 
  
To add the remote repository, pass the `--source <string>` flag.

- `REPOSITORY-NAME` - a name of the npm package without the organization scope
- `PATH-TO-LOCAL-REPO` - a path to the local repository(i.e. `.` in this case)

```
hg repo create REPOSITORY-NAME --private --source PATH-TO-LOCAL-REPO
```

<br />
  
**3 ) Push the local files to Github repository** 
  
Once the Github repository has been created, add a [.gitignore](https://git-scm.com/docs/gitignore) and commit our local files, then push them to this remote.
  
---  
</details> 
  
<details>
<summary><h3>&#10113; Setup Github Actions workflows</h3></summary>
  
**Resources:**
  
:link: [Github Marketplace](https://github.com/marketplace)   
:link: [Using workflows](https://docs.github.com/en/actions/using-workflows)  
      
  
**(Basic Terminologies)**

<details>
<summary>&horbar; YMAL</summary>

> [YAML](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions) is a human-friendly data serialization language for all programming languages.

Github Ations workflows use YAML syntax to define its workflow configuration.

- A YAML file extension is either **.yml** or **.yaml**.
- Workflow files are stored in `.github/workflows` directory of a Github repository.

(For more information: [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions), [Metadata syntax for GitHub Actions](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions))

---

</details>    
  
**1 ) Generate the npm Auth Token** 
  
We need to create our custom access token to privde Github access to our npm packages. To create an access token is fairly simple and can be done using the web interface or the npm CLI.
  
Upon the token generation, make sure to;  
- choose the access token type as **publish**  
- copy the token value(only visible at the time of creation)  
  
<details>
<summary><strong>Option 1 &horbar; Using Web Interface</strong></summary>
 
- [Creating tokens on the website](https://docs.npmjs.com/creating-and-viewing-access-tokens) 
  
- [Viewing tokens on the website](https://docs.npmjs.com/creating-and-viewing-access-tokens#viewing-tokens-on-the-website)

---

</details>  
 
<details>
<summary><strong>Option 2 &horbar; Using command line</strong></summary>
 
- [Creating tokens on the website](https://docs.npmjs.com/creating-and-viewing-access-tokens)

- [Viewing tokens on the website](https://docs.npmjs.com/creating-and-viewing-access-tokens#viewing-tokens-on-the-website)

---

</details>    
  
<br/>  
  
**2 ) Store the npm Auth Token in Github**

:link: [Creating and using encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)

Add a new [secret](<[https://docs.github.com/en/rest/actions/secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#about-encrypted-secrets)>) in Github and assign the value of the newly generated npm token. It's easy to generate a new token using the web interface.

Upon creating a new secret, make sure to;

- follow the [naming rules](https://docs.github.com/en/actions/security-guides/encrypted-secrets#naming-your-secrets)
- prefix with **NPM\_**(e.g. NPM_TOKEN, NPM_AUTH_TOKEN) as its general naming convention.

<br/>  
  
**3 ) Create a workflow file in the Github repository**   
  
In the root of the local package folder, create a `.github/workflows/NAME-OF-WORKFLOW.yml` file.
  
- `NAME-OF-WORKFLOW` - a name of the workflow(e.g. publish, push, etc)
  
```
package.json  
node_modules/  
.github/
  workflows/
    publish.yml
```    
  
<br/>
  
**4 ) Configure a workflow**    
  
We can configure Github Actions workflows to publish the npm package on each new release.
  
**&#10074; Creating a new release**  
  
:link: [Releasing Projects on Github](https://docs.github.com/en/repositories/releasing-projects-on-github)

> A Git tag is similar to a [Git reference](https://docs.github.com/en/rest/git/refs), but the Git commit that it points to never changes. Git tags are helpful when you want to point to specific releases. These endpoints allow you to read and write [tag objects](https://git-scm.com/book/en/v2/Git-Internals-Git-References#Tags) to your Git database on GitHub. The Git tags API only supports annotated [tag objects](https://git-scm.com/book/en/v2/Git-Internals-Git-References#Tags), not lightweight tags.

A new relase can be created manually using the web interface, or setup a workflow to automatically create a new release upon [tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) prefixed with **v**, for instance(see [Step &#10125; Managing a npm Package with Github Actions]()).

<br/>  
   
**&#10074; Publishing a npm package**
  
:link: [Publishing packages to the npm registry](https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages#publishing-packages-to-the-npm-registry)  
  
To trigger the workflow upon creation of a new tag in Github repository, use the [`release`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release) event and its `Ativity types` set as `created`. Events can be defined in [**`on`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on) property. We can run any number of [**`jobs`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobs) and they run in parallel. And we can define any number of [**`steps`**](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps) to be included in each job.
 
e.g.) Publishes a package to the [public npm registry](https://docs.npmjs.com/about-the-public-npm-registry) if [CI tests](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration) pass.    
  
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
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
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

</details>  
</details>  
  
<p align="right">(<a href="#top">back to top</a>)</p>
  
---
  
## Step &#10125; Managing a npm Package with Github Actions

Automatic relasing, versioning, runner, other tests etc  
(in progress)

<p align="right">(<a href="#top">back to top</a>)</p>
