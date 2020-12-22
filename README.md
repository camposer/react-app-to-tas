# React App to TAS

This project presents an approach for deploying a React App on Tanzu Application Service (formerly Pivotal Cloud Foundry) addressing two major challenges:

1. Config management - especially when dealing with multiple environments
2. Enabling hash routes

The application uses the [NGINX buildpack](https://github.com/cloudfoundry/nginx-buildpack) and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For more details visit my related blog post: https://medium.com/@camposer

A demo app can be found here: http://react-app-to-tas.cfapps.io

## Deploying

In order to deploy you just need to execute:
```
cf push -f manifest.yml 
```
