# Common Ninja Starter Kit: NodeJS & ReactJS

This is a starter kit for building an e-commerce app with Common Ninja, NodeJS, and React.

## Getting started

The project is based on Docker and Yarn (v3) workspaces. If you don't have Docker yet, that would be a great time to [download and install it](https://www.docker.com/get-started/) now. Same goes for [yarn](https://yarnpkg.com/).

Once you have both, the next step would be to prepare your environment.

1. Clone this repository:
```
git clone https://github.com/CommonNinja/commonninja-node-react-starter-kit.git
```

2. Browse to the project's folder (`cd commonninja-node-react-starter-kit`) and run the following script:
```
./scripts/dev-setup.sh
```

3. In the `packages/server` folder, edit the `.env` file and set your Common Ninja app keys:
```
# Common Ninja App
COMMONNINJA_APP_ID=XXXX-XXXX-XXXX-XXXX-XXXX
COMMONNINJA_APP_SECRET=cn_XXXX-XXXX-XXXX-XXXX-XXXX
```

If you still haven't created a Common Ninja app, [please do](https://www.commoninja.com/developer/apps).

4. Next, start the project by running:
```
docker compose up
```

5. Browse to the project locally at [http://localhost:3000](http://localhost:3000).

## Project structure

This project contains both `server` and `client` packages. You'll find them under the `packages` folder.

Docker is listening to both packages and will restart the relevant development server automatically after every change you make.

The `client` package is a simple React project.

The `server` package is a NodeJS app, bootstrapped with Express and TypeScript. It already have Common Ninja's NodeSDK installed and set up.

## 📚 Learn more

You can use the following resources to learn more and get help:

📜 [Common Ninja's Docs](https://docs.commoninja.com)

💬 [Discord Community](https://discord.com/invite/cxqUTbvMNd)

📝 [Our Dev.to Blog](https://dev.to/commonninja)
