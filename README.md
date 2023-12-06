# Official Yuvaan Website

## Basic Setup

- Install NPM Packages

```sh
    npm install
```

- Run

```sh
    npm run dev
```

- Format Code

```sh
    npm run format
```

- '/' refers to the root of this project

## Assets(Images, Css and other static content)

- To be placed in `/src/assets/<page name>`
- In case asset is being used in multiple pages, place it in `/src/assets/utils`
- YOUR CSS SHOULD NOT AFFECT HTML UNINTENTIONALLY.To ensure this, Use component specific css, for example , if you are working in _component-name_ and you want class _class-name_ then rename class to _component-name-class-name_. Do not apply css on html tags.

## Fonts

- Defined in `/src/assets/fonts/font.css`
- Already imported in `Global.css`
- To use any font, use font face as defined in `/src/assets/fonts/font.css`

## To Contribute

- Push in respective branch and create pull request
