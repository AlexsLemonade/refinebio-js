<div id="top"></div>

# Publishing the refinebio npm Package

Step-by-Step Guide for manually publishing a npm package for refinebio JS client

**Resources:**<br/>
:link: [npm Docs](https://docs.npmjs.com)

## Table of Contents

- [Prerequisite]()
- [Step &#10102; Access an npm Account]()
  - [Login]()
  - [Check Username]()
  - [Logout]()
- [Step &#10103; Register a Local Package to npm]()
  - [Publish]()
  - [Unpublish]()

## Prerequisite

> Registry data is immutable, ...once published, a package cannot change.

Before registering our local package to [the public npm registory](https://docs.npmjs.com/about-the-public-npm-registry), make sure that;

- all the configuration files are setup correctly.
- no credentials or any other sensitive information is included in an installable.
- a package is tested locally and bug free.

<details>
<summary>&horbar; package.json</summary>

To setup a package.json for a npm package, the following fields should be included as minimal:

**pakage.json**

```json
{
  "name": "@ccdl/refinebio",
  "version": "0.1.0",
  "description": "refinebio JS client",
  "main": "index.js",
  "script": {},
  "dependencies": {},
  "repository": {
    "type": "git",
    "url": "https://github.com/AlexsLemonade/refinebio-js.git"
  },
  "keywords": ["refinebio", "refinebio-js", "refinebo JS client"],
  "author": "CCDL <contact@ccdatalab.org>",
  "contributors": [
    {
      "name": "David Mejia",
      "email": "david@ccdatalab.org"
    },
    {
      "name": "Nozomi Ichihara",
      "email": "nozomi@ccdatalab.org"
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
  
[Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) with [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause) can be easily done via the Github repository:
- Create a new file and named `LICENSE` or `LICENSE.md`
- Select the [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause) template from the license picker provided by Github 
- Review and commit the LICENSE file

(For more information: [Adding a license to a repository](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository))

---

</details>

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step &#10102; Access an npm Account

**IMPORTANT:** Never use the CCDL account to publish a package, but instead use an individual member account.

### &#10074; Login

<br/>

**1 )** Navigate to the local package and run the [`npm login`](https://docs.npmjs.com/cli/v8/commands/npm-adduser)(aliases: `adduser`) command.

To specify an organization scope, pass the `--scope` flag.

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

### &#10074; Check Username

To display the currently logged-in username, use the [`npm whoami`](https://docs.npmjs.com/cli/v8/commands/npm-whoami) command:

```
npm whoami
```

### &#10074; Logout

The [`npm logout`](https://docs.npmjs.com/cli/v7/commands/npm-logout) command logouts without writting any message to stdout.

```
npm logout
npm logout --scope=@ccdl
```

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Step &#10103; Register a Local Package to npm

### &#10074; Publish

To publish a local package, use the [`npm publish`](https://docs.npmjs.com/cli/v8/commands/npm-publish) command.

**NOTE:** By default, an organization scoped package is private; thus use the <code>--access <<strong>public</strong>|restricted></code> flag to explicitly set its access level to public upon publishing.

**1 )** In the root of the local package folder, run the following:

```
npm publish --access public
```

Since we configured [2FA](https://docs.npmjs.com/configuring-two-factor-authentication) with [YubiKey](https://www.yubico.com), we'll neeed to [generate a one-time password](https://docs.npmjs.com/accessing-npm-using-2fa) using the npm Web interface(follow the same steps as we did when login to the npm account).

**2 )** Install the published npm package

Once successfully published , it can be installed by its name as well as will be listed on the CCDL account.

```
npm install @ccdl/refinebio
```

### &#10074; Unpublish

**IMPORTANT:**

> Registry data is immutable, meaning once published, a package cannot change. We do this for reasons of security and stability of the users who depend on those packages. So if you've ever published a package called "bob" at version 1.1.0, no other package can ever be published with that name at that version. This is true even if that package is unpublished.

- Once `package@version` has been published, that combination will be permanently unavailable.
- Once a npm package has been unpublished, it cannot be undone.
- Once a npm package is entirely unpublished(inluding all versions), it cannot be published again with any new versions within 24 hours.

(For more infomration: [npm Unpublish Policy](https://docs.npmjs.com/policies/unpublish))

**Unpublish a entire package**

To unpublish all versions at once, use the [`npm unpublish`](https://docs.npmjs.com/cli/v8/commands/npm-unpublish) command and the `-f`(`--force`) flag.

Since we configured [2FA](https://docs.npmjs.com/configuring-two-factor-authentication) with [YubiKey](https://www.yubico.com), we'll neeed to [generate a one-time password](https://docs.npmjs.com/accessing-npm-using-2fa) using the npm Web interface(follow the same steps as we did when login to the npm account). Alternatively we may also pass a one-time passward using the `--otp=CODE-FROM-AUTH-APP` flag.

```
npm unpublish ccdl@refinebio -f
```

**Unpublish a specific version**

```
 npm unpublish @ccdl/refinebio@0.1.0
```

<p align="right">(<a href="#top">back to top</a>)</p>
