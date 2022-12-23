import { TwistyPlayer, TwistyPlayerConfig } from "cubing/twisty";
import React from "react";
import { useEffect, useState } from "react";

// `React.memo` is used to only reconstruct the twisty puzzle when the props change
export default React.memo(function TwistyPuzzle(props: TwistyPlayerConfig) {
  const [twistyPlayer, setTwistyPlayer] = useState<TwistyPlayer | null>(null);
  const [currentObject3D, setCurrentObject3D] = useState<Awaited<
    ReturnType<
      typeof TwistyPlayer.prototype.experimentalCurrentThreeJSPuzzleObject
    >
  > | null>(null);

  useEffect(() => {
    const twistyPlayer = new TwistyPlayer(props);
    twistyPlayer.style.display = "none";
    document.body.appendChild(twistyPlayer);
    setTwistyPlayer(twistyPlayer);
  }, [props]);

  useEffect(() => {
    const updatePuzzleObject = async () => {
      if (twistyPlayer) {
        const object3D =
          await twistyPlayer.experimentalCurrentThreeJSPuzzleObject(
            updatePuzzleObject
          );

        setCurrentObject3D(object3D);
      }
    };

    updatePuzzleObject();
  }, [currentObject3D, setCurrentObject3D, twistyPlayer]);

  return currentObject3D ? (
    <primitive object={currentObject3D} dispose={null} />
  ) : null;
});
