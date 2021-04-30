
function CreatePublicFrontEnd {
    param ($ApiVersion, $Suffix, $Env)

    Write-Output "Create Public front-end for suffix $Suffix and env $Env using version $ApiVersion ..."

    Write-Output "Deleting existing resources..."
    oc delete all,NetworkPolicy,ConfigMap -n a4b31c-$Env -l template=fom-public-deploy,tag=$Suffix

    Write-Output "Creating public front-end..."
    oc process -f fom-public-deploy.yml -p ENV=$Env -p TAG=$Suffix -p HOSTNAME="nr-fom-public-$Suffix-$Env" -p IMAGE_STREAM_VERSION=$ApiVersion | oc create -n a4b31c-$Env -f -
}

CreatePublicFrontEnd -Suffix "main" -Env "dev" -ApiVersion "main" 
CreatePublicFrontEnd -Suffix "working" -Env "dev" -ApiVersion "dev" 
