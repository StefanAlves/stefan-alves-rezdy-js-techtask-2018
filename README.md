
# Pre-reqs

- Install [git](https://git-scm.com/)
- Install [yarn](https://yarnpkg.com/en/docs/install)
- Install [nvm](https://github.com/creationix/nvm)
    - Install node version 10.5.0
        ```
        nvm install 10.5.0
        ```
- Install [docker and docker-compose](https://www.docker.com/)
- Install an editor. Recommended [visual studio code](https://code.visualstudio.com/)
- Insall NPX: 
   ```
   yarn global add npx
   ```
   
# Install dependencies

```shell
yarn
```

# Standardize git commits with commitizen

Use commitizen for git commits. [Commitizen](https://github.com/commitizen/cz-cli) helps standerdazing commit messages.
To use commitezen please use the bellow command:

```
yarn commit
```

You'll be prompted to fill out any required commit fields at commit time 

# Running application

```shell
docker-compose up
```

# Running tests

```shell
yarn test
```

**Please make sure you have node module installed**

# Project Structure

* src
    - components 
        - presentationl - simple atomic components
            - recipes
            - recipe
        - container - components wrapped by store
            - home
    - store - shared state of the application
        - modules
            - recipes
            - ingredients
        - getters.ts
        - index.ts
    - index.ts
    - types.d.ts
    - vue-shims.d.ts

# Production Build

```
docker build -f Dockerfile.prod.Dockerfile -t app-name . 
```

```
docker run -p 5000:8080 app-name 
```

Open the browser and go to [localhost](http://127.0.0.1:5000/)

## In a CICD environment semantic release can be integrated

Please read [semantic release](https://semantic-release.gitbook.io/semantic-release/).

Running semantic release in this project:

```
yarn semantic-release
```

**Requires github token setup**
