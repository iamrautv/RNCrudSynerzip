echo "asdasd";
echo $1;
if [[ $1 == "dev" ]];
then
    cp -fr .env-dev .env
fi

if [[ $1 == "stage" ]]
then
    cp -fr .env-stage .env
fi

if [[ $1 == "prod" ]]
then
    cp -fr .env-prod .env
fi

echo "-------"
cat .env
echo "-------"
