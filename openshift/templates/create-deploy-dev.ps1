
 # WARNING: This deletes all existing resources, including tagged images.
 oc delete all -n a4b31c-dev -l template=fom-public-deploy
 oc process -f fom-public-deploy.yml -p ENV=dev | oc create -n a4b31c-dev -f -