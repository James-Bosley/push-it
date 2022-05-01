const util = require("util");
const exec = util.promisify(require("child_process").exec);

const terminalCommand = async (cmd) => {
  const { stdout, stderr } = await exec(cmd);
  console.log(stdout);
  if (stderr.length > 0) {
    console.error(stderr);
  }
};

const pushIt = async () => {
  const commands = [
    `git add .`,
    `git commit -m "${process.argv[2] || "Fast push by PushIt"}"`,
    `git push`,
    `git status`,
  ];

  for (const command of commands) {
    try {
      await terminalCommand(command);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
};

pushIt();
