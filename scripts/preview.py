from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
import os
os.chdir(Path(__file__).resolve().parents[1] / 'build')
class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        route = urlsplit(self.path).path
        candidate = route.rstrip('/') + '.html'
        if route in ('/Ekansh_Resume.pdf', '/Ekansh_resume.pdf'):
            self.path = '/resume_quant.pdf'
        elif route != '/' and Path(candidate.lstrip('/')).is_file():
            self.path = candidate
        elif route == '/':
            self.path = '/index.html'
        elif not Path(route.lstrip('/')).is_file():
            self.send_response(404)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(Path('404.html').read_bytes())
            return
        super().do_GET()
print('Local preview: http://127.0.0.1:4173', flush=True)
ThreadingHTTPServer(('127.0.0.1', 4173), Handler).serve_forever()
