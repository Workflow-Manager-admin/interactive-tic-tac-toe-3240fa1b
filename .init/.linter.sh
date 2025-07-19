#!/bin/bash
cd /home/kavia/workspace/code-generation/interactive-tic-tac-toe-3240fa1b/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

