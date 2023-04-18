import { useState } from "react";
//import { AdjustmentsIcon, InformationCircleIcon } from "@heroicons/react/solid";
import { useSwapStyles } from "@/components/styles";
import { Button, Popover } from "@mantine/core";

import { InfoRounded, Settings } from "@material-ui/icons";
const OPTIONS = [1, 5, 10];

export const Slippage = ({
  slippage,
  setSlippage,
}: {
  slippage: number;
  setSlippage: (arg: number) => void;
}) => {
  const [input, setInput] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const { classes } = useSwapStyles();
  const custom = !OPTIONS.includes(input || -1);

  const canSubmit = !custom || (custom && input && input > 0 && input < 500);

  const handleSave = () => {
    input && setSlippage(input);
    setVisible(false);
  };

  return (

    <>

      <Popover width={350} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Settings
            style={{ color: "#7791E0", width: "20px", height: "20px", border: '1px solid #132235 !important' }}
          />
        </Popover.Target>
        <Popover.Dropdown style={{
          backgroundColor: "rgb(3, 10, 19)",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "rgb(19, 34, 53)",
          borderRadius: "10px",
        }}>
          <>
            {" "}
            <div>
              <span className={classes.h2}>Slippage settings</span>
              <div className={classes.slippageContainer}>
                {OPTIONS.map((e) => {
                  return (
                    <Button className={classes.btnContainer} onClick={() => setInput(e)}>{e / 10}%</Button>
                  );
                })}
              </div>
              <div className="mt-5">
                <div
                  style={{
                    position: "relative",

                    padding: "2px",
                    borderRadius: "6px",
                    height: "50px",

                    maxWidth: "100%",
                    width: "100% !important",

                    background: "rgba(19, 34, 53, 0.5)",
                    border: "1px solid #132235",

                    // display: flex;
                    // align-items: center;
                    // padding: 1em;
                    // flex-direction: row;
                    // flex: 1 1;
                    // margin-bottom: 10px;
                    // justify-content: space-between;
                  }}
                >
                  <input
                    onChange={(e) =>
                      setInput(10 * parseFloat(e.target.value.trim()))
                    }
                    placeholder="0.00 %"
                    value={(input || 0) / 10}
                    type="number"
                    max={100}
                    min={0}
                    className={classes.slippageInput}
                  />
                  <span className={classes.percentage}>%</span>
                </div>
              </div>
              {!canSubmit && (
                <div className={classes.slippageError}>
                  <div className={classes.slippageErrorInner}>
                    <InfoRounded className={classes.infoIcon} />
                    <span className={classes.slippageText}>
                      Slippage must be between 0 and 50
                    </span>
                  </div>
                </div>
              )}
            </div>
            <Button onClick={handleSave} color="teal" mt={10}>Save settings</Button>
          </>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};