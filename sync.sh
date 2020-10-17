cd /home/Clarity-Dashboard-UI

git pull

echo "Checking out to branch: $1"

git checkout $1

ng build --prod --extractCss=true

yes | rm -rf /var/www/ng-clarity/ng-clarity

mv ./dist/ng-clarity /var/www/ng-clarity
