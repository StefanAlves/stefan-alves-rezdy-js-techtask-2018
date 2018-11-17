
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

# Install dependencies

```shell
yarn
```

# Standardize git commits with commitizen

Use commitizen for git commits. By using commitzen we can understand when what are the type of changes and apply semantic release and automatically generate changelog. 

Use the command:

```
yarn commit
```

And feel the commit message.

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

src
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
docker run image-name 
```

## In a CICD environment semantic release can be integrated

```
yarn semantic-release
```

**required the github token setup**