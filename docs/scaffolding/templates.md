# Templates

The Tailwind CSS jit mode pre built-in template that can help you setup developing environment quickly and easily.

::: tip There are full list of templates:
- [`--vue`](#vue-in-vite)
- [`--vue-ts`](#typescript-for-vue)
- [`--react`](#react-in-vite)
- [`--react-ts`](#typescript-for-react)
- [`--vuecli`](#vue-cli)
- [`--cra`](#create-react-app)
- [`--ng`](#angular)
:::
<!-- - [`--cra22`](#create-react-app-tailwindcss-2-2) -->
<br>

### Vue in Vite 
Use flag `--vue` to create project with vue in vite.
```shell
npm init vitawind@latest {project-name} -- --vue
```
After creating project, you need:
```shell
cd {project-name}
npm install  #or `yarn`
npm run dev  #or `yarn dev`
```
#### Typescript for Vue 
To create project with **typescript** for vue in vite, use flag `--vue-ts`.

### React in Vite 
Use flag `--react` to create project with react in vite.
```shell
npm init vitawind@latest {project-name} -- --react
```
After creating project, you need:
```shell
cd {project-name}
npm install  #or `yarn`
npm run dev  #or `yarn dev`
```
#### Typescript for React 
To create project with **typescript** for react in vite, use flag `--react-ts`.

### Vue-CLI
Use flag `--vuecli` to create project with Vue-CLI.
```shell
npm init vitawind@latest {project-name} -- --vuecli
```
After creating project, you need:
```shell
cd {project-name}
npm install  #or `yarn`
npm run serve  #or `yarn serve`
```

### Create React App 
Use flag `--cra` to create project with Create React App.
```shell
npm init vitawind@latest {project-name} -- --cra
```
After creating project, you need:
```shell
cd {project-name}
npm install  #or `yarn`
npm run start  #or `yarn start`
```
<!-- ### Create React App 
Use flag `--cra` to create project with Create React App and ***Tailwind CSS version is 2.1.4***. For newest version of Tailwind, see ["Create React App + TailwindCSS 2.2"](#create-react-app-tailwindcss-2-2) section.
```shell
npm init vitawind {project-name} --cra
```
After creating project, you need:
```shell
cd {project-name}
npm install  #or `yarn`
npm run start  #or `yarn start`
``` -->

<!-- ### Create React App + TailwindCSS 2.2
Use flag `--cra22` to create project with Create React App and ***Tailwind CSS version is 2.2 or higher***.

```shell
npm init vitawind {project-name} --cra22
```
After creating project, you need:
```shell
cd {project-name}
npm install  #or `yarn`
npm run start  #or `yarn start`
``` -->

### Angular
Use flag `--ng` to create project with Angular CLI.

```shell
npm init vitawind@latest {project-name} -- --ng
```
After creating project, you need:
```shell
cd {project-name}
npm install  #or `yarn`
npm run start  #or `yarn start`
```