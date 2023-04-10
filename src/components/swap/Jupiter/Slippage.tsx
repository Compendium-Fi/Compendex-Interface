import { useState } from "react";
import { ButtonModal, ButtonBorderGradient } from "../Buttons";
//import { AdjustmentsIcon, InformationCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { useSwapStyles } from "@/components/styles";
import { Button, UnstyledButton } from "@mantine/core";
import { Settings } from "@material-ui/icons";
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
    // <ButtonModal
    //   visible={visible}
    //   setVisible={setVisible}
    //   buttonClass={classes.selectButton}
    //   buttonText={
    //     <div className={classes.btnText}>
    //       {/* <AdjustmentsIcon className="w-3 mr-2 rotate-90" /> */}
    //       <span className="text-xs"> {slippage / 10} %</span>
    //     </div>
    //   }
    // >
    //   <div>
    //     <h2 className={classes.h2}>Slippage settings</h2>
    //     <div className={classes.slippageContainer}>
    //       {OPTIONS.map((e) => {
    //         return <Button className={classes.btnContainer}>{e / 10}%</Button>;
    //       })}
    //     </div>
    //     <div className="mt-5">
    //       <div
    //         style={{
    //           position: "relative",
    //           backgroundImage: custom
    //             ? "linear-gradient(to right, #10B981, #3B82F6)"
    //             : "none",
    //           padding: "2px",
    //           borderRadius: "6px",
    //           height: "50px",
    //         }}
    //       >
    //         <input
    //           onChange={(e) => setInput(10 * parseFloat(e.target.value.trim()))}
    //           placeholder="0.00 %"
    //           value={(input || 0) / 10}
    //           type="number"
    //           max={100}
    //           min={0}
    //           className={classes.slippageInput}
    //         />
    //         <span className={classes.percentage}>%</span>
    //       </div>
    //     </div>
    //     {!canSubmit && (
    //       <div className={classes.slippageError}>
    //         <div className={classes.slippageError}>
    //           {/* <InformationCircleIcon className="h-[15px] text-orange-300 mr-2" /> */}
    //           <span className="text-sm text-white">
    //             Slippage must be between 0 and 50
    //           </span>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   <Button onClick={handleSave}>Save settings</Button>
    // </ButtonModal>
    <>
      <UnstyledButton>
        {" "}
        <Settings
          style={{ color: "#7791E0", width: "20px", height: "20px" }}
        />{" "}
      </UnstyledButton>
    </>
  );
};
