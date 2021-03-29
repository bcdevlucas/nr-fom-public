Set-Variable -Name "name" -Value "public"
Set-Variable -Name "tag" -Value "demo"
Set-Variable -Name "env" -Value "dev"
oc delete all,NetworkPolicy -n a4b31c-$env -l template=fom-$name-deploy,tag=$tag
oc process -f fom-$name-deploy.yml -p ENV=$env -p TAG=$tag | oc create -n a4b31c-$env -f -
