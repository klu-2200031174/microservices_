# Polyglot Microservices

A three-service demo splitting authentication and product data across two
different backend runtimes, with a single React client consuming both.

## Services

| Directory | Stack | Responsibility |
|---|---|---|
| `backend_django_auth` | Django | User accounts, authentication, token issuing |
| `backend-node-products` | Node.js | Product catalogue |
| `frontend-react` | React | Client for both services |

The point of the split is practising service boundaries across runtimes — the
two backends are written in different languages deliberately, and the frontend
has to work against both.

## Running locally

Each service runs independently, so this takes three terminals.

```bash
# auth service
cd backend_django_auth
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# product service
cd backend-node-products
npm install
npm start

# frontend
cd frontend-react
npm install
npm start
```

## Known limitations

- No service discovery — service URLs are hardcoded client-side
- No API gateway; the client talks to each service directly
- The services don't communicate with each other
- No containerisation
