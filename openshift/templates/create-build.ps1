 # WARNING: This deletes all existing resources, including tagged images.
 oc delete all -l template=fom-public-build
 oc process -f fom-public-build.yml | oc create -f -