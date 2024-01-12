class Player {
  constructor(socketId, playerId, playerName, chipsAmount, balance, totalBet = 0) {
    this.socketId = socketId;
    this.id = playerId;
    this.name = playerName;
    this.chipsAmount = chipsAmount;
    this.balance = balance;
    this.totalBet = totalBet;
  }
}

module.exports = Player;
