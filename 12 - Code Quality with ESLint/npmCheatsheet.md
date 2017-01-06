Packages have been updated since recording. 

eslint-plugin-jsx-a11y version 3 is not compatible with rest of dependencies 

###New Directions

Run this in terminal for correct version

```
npm info "eslint-config-airbnb@latest" peerDependencies
```

Currently showing as of 1/5/17
```
{ eslint: '^3.9.1',
  'eslint-plugin-jsx-a11y': '^2.2.3',
  'eslint-plugin-import': '^2.1.0',
  'eslint-plugin-react': '^6.6.0' }
```

Run this instead: 

```
npm install -g eslint-config-airbnb eslint-plugin-jsx-a11y@^2.2.3 eslint-plugin-import eslint-plugin-react
```
