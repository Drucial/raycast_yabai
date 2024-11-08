import { showHUD } from "@raycast/api";
import { runYabaiCommand } from "./helpers/scripts";
import { showFailureToast } from "@raycast/utils";

export default async () => {
  try {
    const { stderr } = await runYabaiCommand("-m window --space next --focus");

    if (stderr) {
      throw new Error(stderr);
    }

    showHUD("Successfully moved window to next space.");
  } catch (error) {
    showFailureToast(error, {
      title: "Failed to start Yabai. Make sure you Yabai is installed.",
    });
  }
};
