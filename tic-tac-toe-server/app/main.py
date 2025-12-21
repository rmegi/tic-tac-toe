import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from openai_handler import OpenAIHandler

# from routes.openai_routes import router as openai_router

load_dotenv()

openai_api_key = os.getenv("OPENAI_KEY")

app = FastAPI()
ai_agent = OpenAIHandler(model="gpt-4o", api_key=openai_api_key)

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


@app.get("/health")
async def health_check():
    return {"status": "ok"}


@app.get("/play/{board_state}")
async def play(board_state: str):
    print(f"📩 Sending to OpenAI: {board_state}")
    response = ai_agent.ask(board_state)
    print(f"🤖 OpenAI Response: {response}")
    return {"response": response}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
