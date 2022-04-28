#PushIt

A node script that rolls git add, git commit and git push into one terminal command that takes an optional commit message argument. This was designed to save time (and typing) to complete simple git operations, and you may find it useful if you are commiting and pushing regularly throughout your day.

##Usage

Clone this repo and add an alias to your .bashrc (or equivalent) pointing at the absolute path of the script `alias pushit="node /c/pushit.js"`. (Requires Node.js).

To commit and push to your remote repo in one command you can then use `$pushit "Commit Message"` in your terminal.
If the fire alarm has gone off and time is of the essence you can also simply use `$pushit` to commit and push with a non-descriptive commit message.
