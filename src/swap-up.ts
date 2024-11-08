import { showHUD } from "@raycast/api";
import { runYabaiCommand } from "./helpers/scripts";
import { showFailureToast } from "@raycast/utils";

export default async () => {
  try {
    const { stderr } = await runYabaiCommand("-m window --swap north");

    if (stderr) {
      throw new Error(stderr);
    }

    showHUD("Successfully moved window up.");
  } catch (error) {
    showFailureToast(error, {
      title: "Failed to move window up, make sure you have Yabai installed and running.",
    });
  }
};
