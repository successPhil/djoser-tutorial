export SECRET_KEY=abc123
export DEBUG=True
export POSTGRES_DB=pokemon_jwt_db
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres
export DOMAIN='localhost'
export AWS_SES_REGION_NAME=$AWS_SES_REGION_NAME
export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY


COMPOSE_DOCKER_CLI_BUILD=0 DOCKER_BUILDKIT=0 docker compose -f docker-compose.dev.yml up -d --build

# make sure the postgres container is ready, then run migrations
sleep 10
docker exec djoser-tutorial-api-1 python /src/manage.py makemigrations 
docker exec djoser-tutorial-api-1  python /src/manage.py migrate