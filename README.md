# Common Ninja Starter Kit: NodeJS & ReactJS

This is a starter kit for building an e-commerce app with Common Ninja, NodeJS, and React.

## Getting started

The project is based on Docker and Yarn workspaces (v3). If you don't have Docker yet, that would be a great time to [download and install it](https://www.docker.com/get-started/). Same goes for [yarn](https://yarnpkg.com/).

In addition, if you still haven't created a Common Ninja app, [please do](https://www.commoninja.com/developer/apps).

Once you have both, the next step would be to prepare your environment.

1. Clone this repository:
```
git clone https://github.com/CommonNinja/commonninja-node-react-starter-kit.git
```

2. Browse to the project's folder (`cd commonninja-node-react-starter-kit`) and run the following script:
```
./scripts/dev-setup.sh
```

3. In the `packages/server` folder, edit the `.env` file and set your Common Ninja app credentials:
```
# Common Ninja App
COMMONNINJA_APP_ID=XXXX-XXXX-XXXX-XXXX-XXXX
COMMONNINJA_APP_SECRET=cn_XXXX-XXXX-XXXX-XXXX-XXXX
```

4. Next, start the project by running:
```
docker compose up
```

5. Browse to the project locally at [http://localhost:3000](http://localhost:3000).

## Project structure

This project contains both `server` and `client` packages. You'll find them under the `packages` folder.

Docker is watching file changes for both packages and will restart the development server automatically.

The `client` package is a simple **React** project.

The `server` package is a **NodeJS** app, bootstrapped with Express and TypeScript. It already includes the [Common Ninja NodeSDK](https://github.com/CommonNinja/node-sdk) installed and set up.

## Installing dependencies

If you want to install dependencies on one of the packages (`client`, `server`) you'll need to use yarn's workspace command.

For the `client` package use:
```
yarn workspace client-app add <PACKAGE_NAME>
```

For the `server` package use:
```
yarn workspace server-app add <PACKAGE_NAME>
```

**Please note**: after installing a new dependency, you'll need to restart docker:

```
docker compose down
docker compose up
```

## 📚 Learn more

You can use the following resources to learn more and get help:

📜 [Common Ninja's Docs](https://docs.commoninja.com)

💬 [Discord Community](https://discord.com/invite/cxqUTbvMNd)

📝 [Our Dev.to Blog](https://dev.to/commonninja)
