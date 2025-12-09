from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from routes.openai_routes import router as openai_router

app = FastAPI()
# app.include_router(openai_router, prefix="/openai", tags=["OpenAI"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
