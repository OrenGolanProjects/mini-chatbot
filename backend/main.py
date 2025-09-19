from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Heyooo!"}

# Add this route for development - serves an HTML page with auto-refresh
@app.get("/dev", response_class=HTMLResponse)
def dev_page():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>FastAPI Dev</title>
        <meta http-equiv="refresh" content="2">
    </head>
    <body>
        <h1>FastAPI Development</h1>
        <p id="message">Loading...</p>
        <script>
            fetch('/')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('message').textContent = data.message;
                })
                .catch(error => console.error('Error:', error));
        </script>
    </body>
    </html>
    """