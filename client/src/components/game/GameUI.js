import React from "react";
import { BetSlider } from "./BetSlider";
import { UIWrapper } from "./UIWrapper";
import GameUIButton from "../buttons/GameUIButton";
import { toast } from "react-toastify";

export const GameUI = ({
  currentTable,
  seatId,
  bet,
  setBet,
  raise,
  standUp,
  fold,
  check,
  call,
  activeTab,
}) => {
  return (
    <UIWrapper>
      <div className="row">
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={() => raise(bet + currentTable.seats[seatId].bet)}
        >
          Bet {parseFloat(bet).toFixed(2)}
        </GameUIButton>
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={standUp}
        >
          Stand Up
        </GameUIButton>
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={() =>
            raise(
              currentTable.seats[seatId].stack + currentTable.seats[seatId].bet
            )
          }
        >
          All In ({parseFloat(currentTable.seats[seatId].stack).toFixed(2)})
        </GameUIButton>
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={() =>
            raise(
              currentTable.seats[seatId].stack + currentTable.seats[seatId].bet
            )
          }
        >
          Pot:
          {currentTable.pot}
        </GameUIButton>
      </div>
      <div className="row">
        <GameUIButton
          width="60.05px"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={() => raise(bet + currentTable.seats[seatId].bet)}
        >
          MIN
        </GameUIButton>
        <GameUIButton
          width="40.47px"
          height="40.47px"
          fill={true}
          radius="98px"
          onClick={() => raise(bet + currentTable.seats[seatId].bet)}
        >
          -
        </GameUIButton>
        <BetSlider
          currentTable={currentTable}
          seatId={seatId}
          bet={bet}
          setBet={setBet}
          activeTab={activeTab}
        />
        <GameUIButton
          width="40.47px"
          height="40.47px"
          fill={true}
          radius="98px"
          onClick={() => raise(bet + currentTable.seats[seatId].bet)}
        >
          +
        </GameUIButton>
        <GameUIButton
          width="60.05px"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={() => raise(bet + currentTable.seats[seatId].bet)}
        >
          MAX
        </GameUIButton>
      </div>
      <div className="row">
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={fold}
        >
          Fold
        </GameUIButton>
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={check}
          visible={
            currentTable.callAmount === 0 ||
            currentTable.seats[seatId].bet >= currentTable.callAmount
          }
          nameStr = "check"
        >
          Check
        </GameUIButton> 
        
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          disabled={
            currentTable.callAmount === 0 ||
            currentTable.seats[seatId].bet >= currentTable.callAmount
          }
          visible={
            currentTable.callAmount === 0 ||
            currentTable.seats[seatId].bet >= currentTable.callAmount
          }
          nameStr = "call"
          onClick={call}
        >
          Call
          {console.log(JSON.stringify(currentTable.seats[seatId], null, 2))}
          {currentTable.callAmount &&
          currentTable.seats[seatId].bet < currentTable.callAmount &&
          currentTable.callAmount <= currentTable.seats[seatId].stack
            ? currentTable.callAmount - currentTable.seats[seatId].bet
            : ""}
        </GameUIButton>
        {/* {toast("pot = " + (currentTable.seats[seatId].stack + currentTable.seats[seatId].bet))} */}
        
        {/* {console.log("current="+currentTable.pot)} */}
        

        <GameUIButton
          width="33%"
          height="48.03px"
          fill={true}
          radius="7px"
          display={currentTable.seats[seatId].stack > 0}
          onClick={() => {
            return raise(currentTable.seats[seatId].stack > bet ? bet + currentTable.seats[seatId].bet : currentTable.seats[seatId].stack + currentTable.seats[seatId].bet)}
          }
        >
          Raise
        </GameUIButton>
       
      </div>
    </UIWrapper>
  );
};
