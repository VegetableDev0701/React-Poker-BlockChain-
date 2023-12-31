import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ReactComponent as IconFive } from "../../assets/icons/icon-five.svg";
import socketContext from "../../context/websocket/socketContext";
import gameContext from "../../context/game/gameContext";
import { useHistory } from "react-router-dom";
import globalContext from "../../context/global/globalContext";

const TableHeader = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  background-color: #323846;
  height: 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: 98.3%;
  & .players {
    width: 10%;
  }
  & .name {
    width: 18%;
  }
  & .speeds {
    width: 18%;
  }
  & .avg {
    width: 18%;
  }
  & .wait {
    width: 18%;
  }
  & .stakes {
    width: 18%;
  }
  span {
    text-align: center;
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const TableBody = styled.div`
  max-height: 450px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.div`
  padding: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${(props) => (props.active ? `#333541` : `#181a26`)};
  height: 47.9px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 98.9%;
  cursor: pointer;

  & .players {
    position: relative;
    text-align: center;
    width: 10%;
    p {
      position: absolute;
      font-size: 9px;
      color: #fff;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      top: 36%;
    }
  }
  & .name {
    display: flex;
    flex-direction: column;
    width: 18%;
    align-items: center;
    & p {
      font-weight: 400;
      font-size: 10px;
      line-height: 13px;
      color: #878282;
      margin-bottom: 0px;
    }
  }
  & .speeds {
    width: 18%;
  }
  & .avg {
    width: 18%;
  }
  & .wait {
    width: 18%;
  }
  & .stakes {
    width: 18%;
  }
  span {
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 15.6px;
  }
`;

const GameTable = (props) => {
  const { joinTable } = useContext(gameContext);
  const history = useHistory();
  const { tables, previewTable, setPreviewTable } = useContext(globalContext);
  const { socket } = useContext(socketContext);

  const joinGame = (tableId) => {
    if (socket && tableId) {
      if (previewTable && tableId === previewTable.id) {
        joinTable(tableId);
        history.push("/play");
      } else {
        setPreviewTable(tables[tableId - 1]);
      }
    }
  };

  return (
    <>
      <TableHeader>
        <span className="players">Players</span>
        <span className="name">Name</span>
        <span className="speeds">Speeds</span>
        <span className="avg">Avg. Pot</span>
        <span className="wait">Wait</span>
        <span className="stakes">Stakes</span>
      </TableHeader>
      <TableBody>
        {props.tableData.map((item, idx) => {
          return (
            <TableRow
              key={idx}
              onClick={() => joinGame(item.id)}
              active={previewTable?.id === item.id}
            >
              <div className="players">
                <p>{`${item.currentNumberPlayers} / ${item.maxPlayers}`}</p>
                <IconFive />
              </div>
              <div className="name">
                <span>.50/1 NLH</span>
                {/* <span>{item.name}</span> */}
                <p>{item.mode ? item.mode : "TexasHoldEm, NL"}</p>
              </div>
              <span className="speeds">
                {item.speed ? item.speed : `Normal`}
              </span>
              <span className="avg">{item.avg ? item.avg : `7.08 $`}</span>
              <span className="wait">{item.wait ? item.wait : 0}</span>
              <span className="stakes">
                {item.stake ? item.stake : `0.5$/1$`}
              </span>
            </TableRow>
          );
        })}
      </TableBody>
    </>
  );
};

export default GameTable;
