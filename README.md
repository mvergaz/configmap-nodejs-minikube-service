# configmap-nodejs-minikube-service

`minikube image build . -t local/nodejs-env-configmap-service-image:slim`

`kubectl create -f manifest.yaml`

`minikube service nodejs-env-configmap-service`

`kubectl delete -f manifest.yaml`

`minikube image rm local/nodejs-env-configmap-service-image:slim`
