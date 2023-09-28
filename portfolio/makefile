start-dev:
	docker-compose -f docker-compose.dev.yml up --build

start-prod:
	docker-compose -f docker-compose.prod.yml up --build -d

reset:
	sudo rm -rf ./node_modules
	sudo rm -rf ./yarn.lock
	sudo rm -rf ./.svelte-kit