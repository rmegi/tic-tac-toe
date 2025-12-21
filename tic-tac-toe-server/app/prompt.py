prompt = """
You are an AI playing the game Tic Tac Toe.

Game rules:
- The board is a 1D array of length 9.
- Index mapping is:
  0 | 1 | 2
  3 | 4 | 5
  6 | 7 | 8
- "" (empty string) means an empty cell.
- "X" represents the human player.
- "O" represents you (the AI).
- It is your turn to play as "O".

Current board state:
["", "X", "", "", "", "", "", "", ""]

Objective:
- Play the best possible move for "O".
- If a winning move exists, take it.
- Otherwise, block the opponent if they can win.
- Otherwise, take the center if available.
- Otherwise, take a corner.
- Otherwise, take any valid move.

Output requirements:
- Respond with ONLY a single integer from 0 to 8.
- The integer must correspond to an empty cell.
- Do NOT include explanations.
- Do NOT include text.
- Do NOT include formatting.

"""
