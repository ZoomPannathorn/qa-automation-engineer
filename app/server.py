import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


STATIC_DIR = Path(__file__).parent / "static"
HOST = "127.0.0.1"
PORT = 8000

VALID_USER = {
    "username": "admin@demo.test",
    "password": "password123",
    "name": "QA Admin",
}

PRODUCTS = [
    {"id": 1, "name": "Noise-Canceling Headphones", "price": 35.00},
    {"id": 2, "name": "Wireless Mouse", "price": 20.00},
    {"id": 3, "name": "Laptop Stand", "price": 18.00},
]


class DemoRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(STATIC_DIR), **kwargs)

    def _json_response(self, payload, status=200):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/health":
            return self._json_response({"status": "ok", "service": "shopsmart-demo"})
        if self.path == "/api/products":
            return self._json_response({"products": PRODUCTS})
        if self.path in ("/", "/index.html"):
            self.path = "/index.html"
        return super().do_GET()

    def do_POST(self):
        if self.path != "/api/login":
            return self._json_response({"error": "Endpoint not found"}, status=404)

        content_length = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(content_length).decode("utf-8") if content_length else "{}"

        try:
            payload = json.loads(raw_body)
        except json.JSONDecodeError:
            return self._json_response({"error": "Invalid JSON payload"}, status=400)

        username = payload.get("username", "").strip()
        password = payload.get("password", "").strip()

        if not username or not password:
            return self._json_response(
                {"error": "Username and password are required"},
                status=400,
            )

        if username == VALID_USER["username"] and password == VALID_USER["password"]:
            return self._json_response(
                {
                    "token": "demo-token-123",
                    "user": {
                        "name": VALID_USER["name"],
                        "role": "automation-engineer",
                    },
                }
            )

        return self._json_response({"error": "Invalid credentials"}, status=401)


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), DemoRequestHandler)
    print(f"Serving ShopSmart QA Demo at http://{HOST}:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
