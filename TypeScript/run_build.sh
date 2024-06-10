#!/bin/bash  
# add shebang command to run the script

# Navigate to the project root directory if necessary
# cd /path/to/your/project

# Run TypeScript compiler
npx tsc

# Run the compiled JavaScript file
node build/index.js


# This file only executable from the terminal Bash shell.
# To make it executable, run the following command:
# chmod +x run_build.sh

# --- OR ---
# ./run_build.sh