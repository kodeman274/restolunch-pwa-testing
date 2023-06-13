import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const socket = new WebSocket(url);
    socket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurants = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: restaurants.name,
      options: {
        body: restaurants.review,
        icon: '/icons/icon-192x192.png',
      },
    });
  },
};

export { WebSocketInitiator };
