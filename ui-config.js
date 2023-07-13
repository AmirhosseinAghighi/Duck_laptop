let config = {};

config.dataLangs = {
  ["bounty-volunteer"]: (data) => {
    data = JSON.parse(data);
    return `${desktop.appsData["seven"].data.account.username} has requested to do ${data.username} bounty for ${data.price} BTC`;
  },
};
